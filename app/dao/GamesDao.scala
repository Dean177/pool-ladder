package dao

import java.sql.Date

import scala.concurrent.Future
import models.{Player, Game}
import play.api.Play
import play.api.db.slick.DatabaseConfigProvider
import play.api.db.slick.HasDatabaseConfig
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import slick.driver.JdbcProfile


class GamesDao extends GamesComponent with HasDatabaseConfig[JdbcProfile] {
  protected val dbConfig = DatabaseConfigProvider.get[JdbcProfile](Play.current)
  import driver.api._

  def recent(): Future[Seq[Game]] = {
    db.run(games.sortBy(_.playedOn.desc).result)
  }

  def gamesWithWinner(): Future[Seq[(Game, Player)]] = {
    val gameWithWinnerAndLoser = for((game, winner) <- games join players on (_.winnerId === _.id)) yield (game, winner)

    db.run(gameWithWinnerAndLoser.result)
  }

  def create(game: Game): Future[Game] = {
    db.run{
      (games returning games.map(_.id)) into ((game, id) => game.copy(id=Some(id))) += game
    }
  }

  def insert(newGames: Seq[Game]): Future[Unit] = db.run(games ++= newGames).map { _ => ()}

  def find(id: Long): Future[Option[Game]] = {
    db.run(games.filter(_.id === id).result.headOption)
  }

  def withPlayer(id: Long): Future[Seq[Game]] = {
    db.run(games
      .filter(game => game.winnerId === id || game.loserId === id)
      .sortBy(_.playedOn.desc)
      .result)
  }
}


trait GamesComponent extends PlayersComponent { self: HasDatabaseConfig[JdbcProfile] =>
  import driver.api._

  val games = TableQuery[GamesTable]

  class GamesTable(tag: Tag) extends Table[Game](tag, "Game") {
    def id = column[Long]("id", O.PrimaryKey, O.AutoInc)
    def winnerId = column[Long]("winnerId")
    def loserId = column[Long]("loserId")
    def playedOn = column[Date]("playedOn")

    def winner = foreignKey("WINNER_FK", winnerId, players)(_.id)
    def loser = foreignKey("LOSER_FK", winnerId, players)(_.id)

    def * = (id.?, winnerId, loserId, playedOn) <> ((Game.apply _).tupled, Game.unapply)
  }
}