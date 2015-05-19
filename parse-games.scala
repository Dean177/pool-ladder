import java.sql.Timestamp

import models.{Player, Game}
import org.joda.time.DateTime

import scala.io.Source

object GameParser {
  def getGamesFromFile(filename: String): Seq[Game] = {
    Source.fromFile(filename).map(gameFromString(_))
  }

  def gameFromString(gameString: String): Game = {
    val winnerLoserTime = gameString.split("beat")
    val winnerName = winnerLoserTime(0).trim()
    val loserTime = winnerLoserTime(0).split("<at>")
    val loserName = loserTime(0)
    val timeString = loserTime(1)
    val time = new Timestamp(DateTime.parse(timeString).getMillis)

    //GetWinnerId by name
    //GetLoserId by name

    Game(0, 1, 2, time)
  }
}

object PlayerParser {
  def getPlayersFromFile(filename: String): Seq[Player] = {
    Source.fromFile(filename).map(playerFromString(_))
  }
  
  def playerFromString(playerString: String): Player = {
    val nameTime = playerString.split("<CreatedAt>").map(_.trim)

    val name: Array[String] = nameTime(0)
    val timeString = nameTime(1)
    val createdAt = new Timestamp(DateTime.parse(timeString).getMillis)

    Player(0, name, isActive = true, createdAt)
  }
}
