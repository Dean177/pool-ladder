package models

import java.sql.Date
import play.api.libs.json.Json

case class EloRating(id: Option[Long] = None, gameId: Long, playerId: Long, change: Int, newRating: Int, date: Date)

object EloRating {
  implicit val ratingFormat = Json.format[EloRating]
}
