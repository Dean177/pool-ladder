package dao

import java.sql.Timestamp

import scala.concurrent.Future
import models.{GameWithPlayers, Game}
import play.api.Play
import play.api.db.slick.DatabaseConfigProvider
import play.api.db.slick.HasDatabaseConfig
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import slick.driver.JdbcProfile

class GamesDao extends GamesComponent with HasDatabaseConfig[JdbcProfile] {
  protected val dbConfig = DatabaseConfigProvider.get[JdbcProfile](Play.current)
  import driver.api._

  def recent(): Future[Seq[GameWithPlayers]] = {
    val gameWithWinnerAndLoser = for {
      (game, winner, loser) <- withWinnerAndLoser
    } yield (game.id, winner.id, winner.name, loser.id, loser.name, game.playedOn)

    db.run(
      gameWithWinnerAndLoser
        .sortBy(_._6.desc) // Sort by playedOn
        .take(100)
        .result
    ).map { _.map { (GameWithPlayers.apply _) tupled _ } }
  }

  def isMostRecent(gameId: Long): Future[Boolean] = {
    val mostRecentGame = games.groupBy(_.id).map { case (gamesId, games: GamesQuery) =>
      (gamesId, games.map(_.playedOn).max)
    }

    db.run(mostRecentGame.filter(_._1 === gameId).length.result).map(_ == 1)
  }

  def create(game: Game): Future[Game] = {
    val gamesReturningId = (games returning games.map(_.id)) into ((game, newId) => game.copy(id = newId))
    db.run( gamesReturningId += game )
  }

  def insert(newGames: Seq[Game]): Future[Unit] = db.run(games ++= newGames).map { _ => ()}

  def delete(gameId: Long): Future[Int] = {
    db.run(games.filter(_.id === gameId).delete)
  }

  def withPlayer(id: Long): Future[Seq[GameWithPlayers]] = {
    val query = for {
      (game, winner, loser) <- withWinnerAndLoser if game.winnerId === id || game.loserId === id
    } yield (game.id, winner.id, winner.name, loser.id, loser.name, game.playedOn)

    // Need to transform the Future[Seq[(Long, Long, String ...)]] to a case class
    db.run(query.result).map {
      _.map { GameWithPlayers.apply _ tupled _ }
    }
  }
}


trait GamesComponent extends PlayersComponent { self: HasDatabaseConfig[JdbcProfile] =>
  import driver.api._

  def withWinnerAndLoser = {
    for {
      game <- games.sortBy(_.playedOn.desc)
      winner <- game.winner
      loser <- game.loser
    } yield (game, winner, loser)
  }

  val games = TableQuery[GamesTable]

  type GamesQuery = Query[GamesTable, Game, Seq]

  class GamesTable(tag: Tag) extends Table[Game](tag, "Game") {
    def id = column[Long]("id", O.PrimaryKey, O.AutoInc)
    def winnerId = column[Long]("winnerId")
    def loserId = column[Long]("loserId")
    def playedOn = column[Timestamp]("playedOn")

    def winner = foreignKey("WINNER_FK", winnerId, players)(_.id)
    def loser = foreignKey("LOSER_FK", loserId, players)(_.id)

    def * = (id, winnerId, loserId, playedOn) <> ((Game.apply _).tupled, Game.unapply)
  }
}