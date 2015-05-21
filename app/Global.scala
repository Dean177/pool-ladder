import java.sql.Timestamp
import java.text.SimpleDateFormat

import dao.TestData
import models.{Game, Player}
import play.api.Logger
import play.api.{Application, GlobalSettings}

import scala.io.Source


object Global extends GlobalSettings {
  val dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")

  override def onStart(app: Application) = {
    TestData.insertTestDataIfNotPresent()

    try {
      val playersByName = getPlayersFromFile("/home/pool/workspace/pool-ladder/Players.txt")
        .groupBy(_.name).map { case (name: String, players: List[Player]) => (name, players.head) }

      val games: List[Game] = getGamesFromFile("/home/pool/workspace/pool-ladder/Games.txt", playersByName)

    } catch {
      case ex: Exception => Logger.error(ex.getMessage)
    }
  }

  def getPlayersFromFile(filename: String): List[Player] = {
    Logger.info(s"Players sourced from ${filename}")
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

          Game(index, winner.id, loser.id, time)
    }
  }
}
