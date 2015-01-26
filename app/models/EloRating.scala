package models

import java.sql.Date

import play.api.db.slick.Config.driver.simple._
import play.api.libs.json.Json

import scala.slick.lifted.Tag

case class EloRating(id: Option[Long] = None, gameId: Long, playerId: Long, change: Long, newRating: Long, date: Date)

object EloRating {
  implicit val ratingFormat = Json.format[EloRating]
}

class EloRatings(tag: Tag) extends Table[EloRating](tag, "EloRating") {
  def id = column[Long]("id", O.PrimaryKey, O.AutoInc)
  def gameId = column[Long]("gameId")
  def playerId = column[Long]("playerId")
  def change = column[Long]("change")
  def newRating = column[Long]("newRating")
  def date = column[Date]("date")

  def * = (id.?, gameId, playerId, change, newRating, date) <> ((EloRating.apply _).tupled, EloRating.unapply)
}

object EloRatings {
  val ratings = TableQuery[EloRatings]

  def create(rating: EloRating)(implicit s: Session): Long = {
    (ratings returning ratings.map(_.id)) += rating
  }

  def getLatestRating(playerId: Long)(implicit s: Session): EloRating = {
    ratings.filter(_.playerId === playerId).sortBy(_.date.desc).first
  }
}

