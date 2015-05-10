package dao

import java.util.Date

import scala.concurrent.Future

import models.Player
import play.api.Play
import play.api.db.slick.DatabaseConfigProvider
import play.api.db.slick.HasDatabaseConfig
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import slick.driver.JdbcProfile

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

  def insert(players: Seq[Player]): Future[Unit] = db.run(Players ++= players).map { _ => ()}

  def update(player: Player): Future[Unit] = {
    db.run(Players.filter(_.id === player.id).update(player)).map(_ => ())
  }
}
