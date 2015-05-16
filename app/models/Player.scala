package models

import java.sql.Timestamp

import play.api.libs.json.Json

case class Player(id: Option[Long] = None, name: String, isActive: Boolean = true, creationDate: Timestamp)

object Player extends TimestampFormat {
  implicit val playerFormat = Json.format[Player]
}