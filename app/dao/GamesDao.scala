package dao

import java.sql.Timestamp

import scala.concurrent.Future
import models.{GameWithPlayers, Player, Game}
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

    db.run(gameWithWinnerAndLoser.result).map { _.map { (GameWithPlayers.apply _) tupled _ } }
  }

  def withWinnerAndLoser = {
    for {
      game <- games.sortBy(_.playedOn.desc)
      winner <- game.winner
      loser <- game.loser
    } yield (game, winner, loser)
  }

  def create(game: Game): Future[Game] = {
    val gamesReturningId = (games returning games.map(_.id)) into ((game, newId) => game.copy(id= newId))
    db.run( gamesReturningId += game )
  }

  def insert(newGames: Seq[Game]): Future[Unit] = db.run(games ++= newGames).map { _ => ()}

  def withPlayer(id: Long): Future[Seq[GameWithPlayers]] = {
    val query = for {
      (game, winner, loser) <- withWinnerAndLoser if game.winnerId === id || game.loserId === id
    } yield (game.id, winner.id, winner.name, loser.id, loser.name, game.playedOn)

    db.run(query.result).map { _.map { GameWithPlayers.apply _ tupled _ } }
  }
}


trait GamesComponent extends PlayersComponent { self: HasDatabaseConfig[JdbcProfile] =>
  import driver.api._

  val games = TableQuery[GamesTable]

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