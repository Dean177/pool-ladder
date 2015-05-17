package models

import java.sql.Timestamp

import play.api.libs.json.Json

case class Game(id: Long, winnerId: Long, loserId: Long, playedOn: Timestamp)
object Game extends TimestampFormat {
  implicit val gameFormat = Json.format[Game]
}

case class GameWithPlayers(id: Long, winnerId: Long, winnerName: String, loserId: Long, loserName: String, playedOn: Timestamp)
object GameWithPlayers extends TimestampFormat {
  implicit val gameFormat = Json.format[GameWithPlayers]
}