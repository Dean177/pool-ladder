package models

import java.sql.Timestamp

import play.api.libs.json.Json

case class Game(id: Option[Long] = None, winnerId: Long, loserId: Long, playedOn: Timestamp)

object Game extends TimestampFormat {
  implicit val gameFormat = Json.format[Game]
}
