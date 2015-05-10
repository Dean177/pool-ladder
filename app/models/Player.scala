package models

import java.util.Date
import play.api.libs.json.Json

case class Player(id: Option[Long] = None, name: String, isActive: Boolean = true, creationDate: Date)

object Player {
  implicit val playerFormat = Json.format[Player]
}