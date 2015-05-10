package models

import java.sql.Date
import play.api.libs.json.Json

case class Player(id: Option[Long] = None, name: String, isActive: Boolean = true, creationDate: Date)

object Player {
  implicit val playerFormat = Json.format[Player]
}