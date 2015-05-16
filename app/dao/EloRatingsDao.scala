package dao

import java.sql.Date

import lib.{DateTimeHelpers, EloRatingSystem}

import scala.concurrent.Future
import models.{Player, Game, EloRating}
import play.api.Play
import play.api.db.slick.DatabaseConfigProvider
import play.api.db.slick.HasDatabaseConfig
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import slick.driver.JdbcProfile

class EloRatingsDao extends EloRatingsComponent with HasDatabaseConfig[JdbcProfile] {
  protected val dbConfig = DatabaseConfigProvider.get[JdbcProfile](Play.current)
  
  import driver.api._

  val ratingSystem = new EloRatingSystem

  def defaultRating(playerId: Long) = EloRating(None, 0, playerId, 0, 1000, DateTimeHelpers.now())

//  def createForGame(game: Game): Future[Unit] = {
//    for {
//      winnerRating <- getLatestRating(game.winnerId).map(_.newRating)
//      loserRating <- getLatestRating(game.loserId).map(_.newRating)
//    } yield {
//      val Some(gameId) = game.id
//      val points = ratingSystem.pointsExchanged(winnerRating, loserRating)
//      val winnerEloRating = EloRating(None, gameId, game.winnerId, points, winnerRating + points, game.playedOn)
//      val loserEloRating = EloRating(None, gameId, game.loserId, 0 - points, loserRating - points, game.playedOn)
//
//      insert(Seq(winnerEloRating, loserEloRating))
//    }
//  }
  
  def create(rating: EloRating): Future[EloRating] = {
    db.run {
      (ratings returning ratings.map(_.id)) into ((rating: EloRating, id) => rating.copy(id=Some(id))) += rating
    }
  }

//  def latest(): Future[(Player, EloRating)] = {
//    implicit class PlayerExtensions[C[_]](q: Query[PlayersTable, Player, C]){
//      def withRatings = q.join(ratings).on(_.id === _.playerId)
//    }
//
//    val playersWithTopRating = for {
//      (player, ratings) <- players.withRatings
//    } yeild (player, ratings.sortBy(_date).head)
//
//    db.run(playersWithTopRating)
//  }

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
    val gamesGroupedByPlayerQuery = (for {
      rating <- ratings
      player <- rating.player
    } yield (rating, player)).groupBy(_._2.id)

    val latestRatingForPlayer = gamesGroupedByPlayerQuery.map { case (playerId, playerRatings) =>
      (playerId, playerRatings.map(_._1.newRating).max)
    }

    db.run(latestRatingForPlayer.result)
  }

  def getRatingsByPlayer(playerId: Long): Future[Seq[EloRating]] = {
    db.run(ratings.filter(_.playerId === playerId).result)
  }

}

trait EloRatingsComponent extends GamesComponent { self: HasDatabaseConfig[JdbcProfile] =>
  import driver.api._

  val ratings = TableQuery[EloRatingsTable]

  class EloRatingsTable(tag: Tag) extends Table[EloRating](tag, "EloRating") {
    def id = column[Long]("id", O.PrimaryKey, O.AutoInc)
    def gameId = column[Long]("gameId")
    def playerId = column[Long]("playerId")
    def change = column[Int]("change")
    def newRating = column[Int]("newRating")
    def date = column[Date]("date")

    def player = foreignKey("PLAYER_FK", playerId, players)(_.id)
    def game = foreignKey("GAME_RATING_FK", gameId, games)(_.id)

    def * = (id.?, gameId, playerId, change, newRating, date) <> ((EloRating.apply _).tupled, EloRating.unapply)
  }
}


