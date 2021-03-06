import java.sql.Timestamp
import java.text.SimpleDateFormat
import java.util

import repositories.{PlayersRepo, EloRatingsRepo, GamesRepo}
import lib.EloRatingSystem
import models.{EloRating, Game, Player}
import play.api.Logger
import play.api.{Application, GlobalSettings}
import scala.concurrent.duration._

import scala.concurrent.Await
import scala.io.Source
import scala.language.postfixOps


object Global extends GlobalSettings {
  val dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
  type Id = Long
  type RatingVal = Int

  override def onStart(app: Application) = {
    val testData: (Seq[Player], Seq[Game], Seq[EloRating]) = parseTextFiles()

    def playersRepo = new PlayersRepo
    def gamesRepo = new GamesRepo
    def eloRatingsRepo = new EloRatingsRepo

    val insertedPlayers = Await.result(playersRepo.count(), 3 seconds)
    if (insertedPlayers == 0 && testData._1.nonEmpty) {
      Logger.info(s"Empty DB, inserting data.")
      Await.result(playersRepo.insert(testData._1), 3 seconds)
      Await.result(gamesRepo.insert(testData._2), 3 seconds)
      Await.result(eloRatingsRepo.insert(testData._3), 3 seconds)
    }
  }

  def parseTextFiles(): (Seq[Player], Seq[Game], Seq[EloRating]) = {
    try {
      val players = getPlayersFromFile("./Players.txt")
      val playerIdRatings: util.HashMap[Id, RatingVal]  = new util.HashMap[Id, RatingVal]
      players.foreach(player => playerIdRatings.put(player.id, 1000))
      val playersByName = players.groupBy(_.name).map { case (name: String, players: List[Player]) => (name, players.head) }

      val games: Seq[Game] = getGamesFromFile("./Games.txt", playersByName)
      val eloRatings: Seq[EloRating] = games.flatMap(game => ratingsForGame(game, playerIdRatings))

      (players, games, eloRatings)
    } catch {
      case ex: Exception =>
        Logger.error(ex.getMessage)
        (Nil, Nil, Nil)
    }
  }

  def getPlayersFromFile(filename: String): List[Player] = {
    Logger.info(s"Players sourced from $filename")
    Source
      .fromFile(filename)
      .getLines
      .toList
      .zipWithIndex
      .map { case (playerString: String, index: Int) => playerFromString(playerString, index + 1) }
  }

  def playerFromString(playerString: String, id: Int): Player = {
    val nameTime = playerString.split("<Created At>").map(_.trim)
    val name: String = nameTime(0)
    val timeString = nameTime(1)
    val createdAt = new Timestamp(dateFormat.parse(timeString).getTime)

    Player(id, name, isActive = true, createdAt)
  }

  def getGamesFromFile(filename: String, playersByName: Map[String, Player]): List[Game] = {
    Logger.info(s"Games sourced from $filename")
    Source.fromFile(filename)
      .getLines
      .toList
      .zipWithIndex
      .map {
        case (gameString: String, index: Int) =>
          val winnerLoserTime = gameString.split("beat")
          val winnerName = winnerLoserTime(0).trim()
          val loserTime = winnerLoserTime(1).split("<at>").map(_.trim)
          val loserName = loserTime(0)
          val timeString = loserTime(1)
          val time = new Timestamp(dateFormat.parse(timeString).getTime)

          val Some(winner) = playersByName.get(winnerName)
          val Some(loser) = playersByName.get(loserName)

          Game(index + 1, winner.id, loser.id, time)
    }
  }

  def ratingsForGame(game: Game, playerIdRatings: util.HashMap[Id, RatingVal]): Seq[EloRating] = {
    val winnerCurrentRating = playerIdRatings.get(game.winnerId)
    val loserCurrentRating = playerIdRatings.get(game.loserId)

    val eloRatingSystem = new EloRatingSystem
    val ratingChange = eloRatingSystem.pointsExchanged(winnerCurrentRating, loserCurrentRating)

    val winnerRating = EloRating((game.id * 2) -1, game.id, game.winnerId, ratingChange, winnerCurrentRating + ratingChange, game.playedOn)
    val loserRating = EloRating(game.id * 2, game.id, game.loserId, 0 - ratingChange, loserCurrentRating - ratingChange, game.playedOn)

    playerIdRatings.put(game.winnerId, winnerRating.newRating)
    playerIdRatings.put(game.loserId, loserRating.newRating)

    Seq(winnerRating, loserRating)
  }
}
