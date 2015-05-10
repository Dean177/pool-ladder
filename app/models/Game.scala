package models

import java.util.Date
import play.api.libs.json.Json

case class Game(id: Option[Long] = None, winnerId: Long, loserId: Long, playedOn: Date)

object Game {
  implicit val gameFormat = Json.format[Game]
}
