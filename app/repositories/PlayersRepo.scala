package repositories

import java.sql.Timestamp
import scala.concurrent.Future

import models.Player
import play.api.Play
import play.api.db.slick.DatabaseConfigProvider
import play.api.db.slick.HasDatabaseConfig
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import slick.driver.JdbcProfile

class PlayersRepo extends PlayersComponent with HasDatabaseConfig[JdbcProfile] {
  protected val dbConfig = DatabaseConfigProvider.get[JdbcProfile](Play.current)

  import driver.api._

  def count(): Future[Int] = db.run(players.length.result)

  def all(): Future[Seq[Player]] = db.run(players.sortBy(_.name).result)

  def active(): Future[Seq[Player]] = db.run(players.filter(_.isActive).result)

  def find(id: Long): Future[Option[Player]] = {
    db.run(players.filter(_.id === id).result.headOption)
  }

  def create(player: Player): Future[Player] = {
    val playersReturningId = (players returning players.map(_.id)) into ((player, newId) => player.copy(id = newId))
    db.run(playersReturningId += player)
  }

  def insert(newPlayers: Seq[Player]): Future[Unit] = db.run(players ++= newPlayers).map { _ => ()}

  def update(player: Player): Future[Unit] = {
    db.run(players.filter(_.id === player.id).update(player)).map(_ => ())
  }
}

trait PlayersComponent { self: HasDatabaseConfig[JdbcProfile] =>
  import driver.api._

  val players = TableQuery[PlayersTable]

  type PlayersQuery = Query[PlayersTable, Player, Seq]

  class PlayersTable(tag: Tag) extends Table[Player](tag, "Player") {
    def id = column[Long]("id", O.PrimaryKey, O.AutoInc)
    def name = column[String]("name")
    def isActive = column[Boolean]("isActive")
    def creationDate = column[Timestamp]("creationDate")

    def * = (id, name, isActive, creationDate) <> ((Player.apply _).tupled, Player.unapply)
  }
}
