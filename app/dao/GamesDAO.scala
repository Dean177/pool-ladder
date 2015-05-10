package dao

import java.sql.Date

import scala.concurrent.Future
import models.Game
import play.api.Play
import play.api.db.slick.DatabaseConfigProvider
import play.api.db.slick.HasDatabaseConfig
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import slick.driver.JdbcProfile

trait GamesComponent { self: HasDatabaseConfig[JdbcProfile] =>
  import driver.api._

  class GamesTable(tag: Tag) extends Table[Game](tag, "Game") {
    def id = column[Long]("id", O.PrimaryKey, O.AutoInc)
    def winnerId = column[Long]("winnerId")
    def loserId = column[Long]("loserId")
    def playedOn = column[Date]("playedOn")

    def * = (id.?, winnerId, loserId, playedOn) <> ((Game.apply _).tupled, Game.unapply)
  }
}

class GamesDAO extends GamesComponent with HasDatabaseConfig[JdbcProfile] {
  protected val dbConfig = DatabaseConfigProvider.get[JdbcProfile](Play.current)

  import driver.api._

  val games = TableQuery[GamesTable]

  def recent(): Future[Seq[Game]] = {
    val query = games.sortBy(_.playedOn)
    db.run(query.result)
  }

  def create(game: Game): Future[Unit] = db.run(games += game).map { _ => () }

  def insert(newGames: Seq[Game]): Future[Unit] = db.run(games ++= newGames).map { _ => ()}

//  def find(id: Long): Future[Option[Game]] = {
//    db.run(games.filter(_.id === id).result.headOption)
//  }
//
//  def withPlayer(id: Long): Future[Seq[Game]] = {
//    db.run(games.filter(game => game.winnerId === id || game.loserId === id).sortBy(_.playedOn.desc).result)
//  }
}

