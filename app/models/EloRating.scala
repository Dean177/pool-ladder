package models

import java.sql.Timestamp
import play.api.libs.json.Json

case class EloRating(id: Long, gameId: Long, playerId: Long, change: Int, newRating: Int, date: Timestamp)
object EloRating extends TimestampFormat {
  implicit val ratingFormat = Json.format[EloRating]
}

