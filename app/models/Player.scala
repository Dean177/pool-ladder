package models

import java.sql.Date

import play.api.db.slick.Config.driver.simple._
import play.api.libs.json.Json

import scala.slick.lifted.Tag

case class Player(id: Option[Long] = None, name: String, creationDate: Date)

object Player {
  implicit val playerFormat = Json.format[Player]
}

class Players(tag: Tag) extends Table[Player](tag, "Player") {
  def id = column[Long]("id", O.PrimaryKey, O.AutoInc)
  def name = column[String]("name")
  def creationDate = column[Date]("creationDate")

  def * = (id.?, name, creationDate) <> ((Player.apply _).tupled, Player.unapply)
}

object Players {
  def count(implicit s: Session): Int = {
    Query(players.length).first
  }

  val players = TableQuery[Players]

  def all()(implicit s: Session) = {
    players.sortBy(_.name).list
  }

  def create(player: Player)(implicit s: Session) = {
    (players returning players.map(_.id)) += player
  }

  def find(id: Long)(implicit s: Session) = {
    players.filter(_.id === id).first
  }

  def update(player: Player)(implicit s: Session) = {
    players.filter(_.id === player.id).update(player)
  }
}

