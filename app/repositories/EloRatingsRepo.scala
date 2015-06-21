package repositories

import java.sql.Timestamp

import lib.{DateTimeHelpers, EloRatingSystem}
import scala.concurrent.Future
import models.{Game, Player, EloRating}
import play.api.Play
import play.api.db.slick.DatabaseConfigProvider
import play.api.db.slick.HasDatabaseConfig
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import slick.driver.JdbcProfile

class EloRatingsRepo extends EloRatingsComponent with HasDatabaseConfig[JdbcProfile] {
  protected val dbConfig = DatabaseConfigProvider.get[JdbcProfile](Play.current)

  import driver.api._

  val ratingSystem = new EloRatingSystem

  def defaultRating(playerId: Long) = EloRating(0, 0, playerId, 0, 1000, DateTimeHelpers.now())

  def createForGame(game: Game): Future[Seq[EloRating]] = {
    val winnerCurrentRating: Future[EloRating] = getLatestRating(game.winnerId)
    val loserCurrentRating: Future[EloRating] = getLatestRating(game.loserId)

    val newRatings: Future[Seq[EloRating]] = for {
      winnerRating <- winnerCurrentRating
      loserRating <- loserCurrentRating
    } yield eloRatingsForGame(game, winnerRating.newRating, loserRating.newRating)

    newRatings.flatMap { newRatings: Seq[EloRating] =>
      Future.traverse(newRatings){ newRating => create(newRating) }
    }
  }

  def deleteRatingsForGame(gameId: Long): Future[Int] = {
    db.run(ratings.filter(_.gameId === gameId).delete) // Returns the number of affected rows.
  }

  private def eloRatingsForGame(game: Game, winnerRating: Int, loserRating: Int): Seq[EloRating] = {
    val points = ratingSystem.pointsExchanged(winnerRating, loserRating)
    Seq(
      EloRating(0, game.id, game.winnerId, points, winnerRating + points, game.playedOn),
      EloRating(0, game.id, game.loserId, 0 - points, loserRating - points, game.playedOn)
    )
  }

  def create(rating: EloRating): Future[EloRating] = {
    val ratingsReturningId = (ratings returning ratings.map(_.id)) into ((rating, newId) => rating.copy(id =newId))
    db.run(ratingsReturningId += rating)
  }

  def latest(): Future[Seq[(Player, EloRating)]] = {
    val innerQuery = ratingsByPlayerId.map { case (playerId, eloRatings: EloRatingsQuery) =>
      playerId -> eloRatings.map(_.date).max
    }

    // Surely there is a better way of doing this, currently this is only working if the two ratings for the same player arent created in the same millisecond
    val latestRating: EloRatingsQuery = for {
      rating <- ratings
      (playerId, lastRatingDate) <- innerQuery
      if rating.playerId === playerId && rating.date === lastRatingDate
    } yield rating

    val latestRatingWithPlayer = for {
      rating <- latestRating
      player <- rating.player
    } yield (player, rating)

    db.run(latestRatingWithPlayer.result)
  }

  def insert(newRatings: Seq[EloRating]): Future[Unit] = {
    db.run(ratings ++= newRatings).map(_ => {})
  }

  def getLatestRating(playerId: Long): Future[EloRating] = {
    db.run(
      ratings
        .filter(_.playerId === playerId)
        .sortBy(_.date.desc)
        .result
        .headOption
    ).map { optionalRating:Option[EloRating] =>
      optionalRating.getOrElse(defaultRating(playerId))
    }
  }

  def maximumRatingsForAll(): Future[Seq[(Long, Option[Int])]] = {
    val latestRatingForPlayer = ratingsByPlayerId.map { case (playerId, playerRatings) =>
      (playerId, playerRatings.map(_.newRating).max)
    }

    db.run(latestRatingForPlayer.result)
  }

  def minimumRatingsForAll(): Future[Seq[(Long, Option[Int])]] = {
    val latestRatingForPlayer = ratingsByPlayerId.map { case (playerId, playerRatings) =>
      (playerId, playerRatings.map(_.newRating).min)
    }

    db.run(latestRatingForPlayer.result)
  }

  def getRatingsByPlayer(playerId: Long): Future[Seq[EloRating]] = {
    db.run(ratings.filter(_.playerId === playerId).result)
  }

  def ratingsByPlayerId = ratings.groupBy(_.playerId)

}

trait EloRatingsComponent extends GamesComponent { self: HasDatabaseConfig[JdbcProfile] =>
  import driver.api._

  val ratings = TableQuery[EloRatingsTable]

  type EloRatingsQuery = Query[EloRatingsTable, EloRating, Seq]

  class EloRatingsTable(tag: Tag) extends Table[EloRating](tag, "EloRating") {
    def id = column[Long]("id", O.PrimaryKey, O.AutoInc)
    def gameId = column[Long]("gameId")
    def playerId = column[Long]("playerId")
    def change = column[Int]("change")
    def newRating = column[Int]("newRating")
    def date = column[Timestamp]("date")

    def player = foreignKey("PLAYER_FK", playerId, players)(_.id)
    def game = foreignKey("GAME_RATING_FK", gameId, games)(_.id)

    def * = (id, gameId, playerId, change, newRating, date) <> ((EloRating.apply _).tupled, EloRating.unapply)
  }
}


