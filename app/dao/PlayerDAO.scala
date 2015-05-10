package dao

import java.util.Date

import scala.concurrent.Future

import models.Player
import play.api.Play
import play.api.db.slick.DatabaseConfigProvider
import play.api.db.slick.HasDatabaseConfig
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import slick.driver.JdbcProfile


trait PlayersComponent { self: HasDatabaseConfig[JdbcProfile] =>
  import driver.api._

  class PlayersTable(tag: Tag) extends Table[Player](tag, "Player") {
    implicit val dateColumnType = MappedColumnType.base[Date, Long](d => d.getTime, d => new Date(d))

    def id = column[Long]("id", O.PrimaryKey, O.AutoInc)
    def name = column[String]("name")
    def isActive = column[Boolean]("isActive")
    def creationDate = column[Date]("creationDate")

    def * = (id.?, name, isActive, creationDate) <> (Player.tupled, Player.unapply(_))
  }
}

class PlayerDAO extends PlayersComponent with HasDatabaseConfig[JdbcProfile] {
  protected val dbConfig = DatabaseConfigProvider.get[JdbcProfile](Play.current)

  import driver.api._

  val Players = TableQuery[PlayersTable]

  def count(): Future[Int] = db.run(Players.length.result)

  def all(): Future[Seq[Player]] = db.run(Players.sortBy(_.name).result)

  def active(): Future[Seq[Player]] = db.run(Players.filter(_.isActive).result)

  def find(id: Long): Future[Option[Player]] = {
    db.run(Players.filter(_.id === id).result.headOption)
  }

  def create(player: Player): Future[Unit] = db.run(Players += player).map { _ => ()}

  def insert(players: Seq[Player]): Future[Unit] = db.run(Players ++= player).map { _ => ()}

  def update(player: Player): Future[Unit] = {
    db.run(Players.filter(_.id === player.id).update(player)).map(_ => ())
  }
}
