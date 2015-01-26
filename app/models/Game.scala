package models

import java.sql.Date

import play.api.db.slick.Config.driver.simple._
import play.api.libs.json.Json

import scala.slick.lifted.Tag

case class Game(id: Option[Long] = None, winner: Long, loser: Long, playedOn: Date)

object Game {
  implicit val gameFormat = Json.format[Game]
}

class Games(tag: Tag) extends Table[Game](tag, "Game") {
  def id = column[Long]("id", O.PrimaryKey, O.AutoInc)
  def winnerId = column[Long]("winnerId")
  def loserId = column[Long]("loserId")
  def playedOn = column[Date]("playedOn")

  def * = (id.?, winnerId, loserId, playedOn) <> ((Game.apply _).tupled, Game.unapply)
}

object Games {
  val games = TableQuery[Games]

  def create(game: Game)(implicit s: Session) = {
    (games returning games.map(_.id)) += game
  }

  def find(id: Long)(implicit s: Session) = {
    games.filter(_.id === id).first
  }

  def withPlayer(id: Long)(implicit s: Session): List[Game] = {
    games
      .filter(game => game.winnerId === id || game.loserId === id)
      .sortBy(_.playedOn.desc)
      .list
  }

  def recent()(implicit s: Session): List[Game] = {
    games.sortBy(_.playedOn.desc).list
  }
}
