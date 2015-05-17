package controllers

import dao.{EloRatingsDao, GamesDao}
import lib.DateTimeHelpers
import models.{GameWithPlayers, Game}
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.mvc.{Action, Controller}

import play.api.libs.json._

case class NewGame(winnerId: Long, loserId: Long)
object NewGame {
  implicit val newGameFormat = Json.format[NewGame]
}

case class ValidationException(message: String) extends Exception(message)

class GamesController extends Controller {
  val gameDao = new GamesDao
  val eloRatingsDao = new EloRatingsDao

  def create = Action.async(parse.json) { request =>
    val newGame = request.body.as[NewGame]

    gameDao.create(Game(0, newGame.winnerId, newGame.loserId, DateTimeHelpers.now())).map { createdGame =>
      eloRatingsDao.createForGame(createdGame)
      Ok(Json.toJson(createdGame))
    }
  }

  def gamesByPlayer(id: Long) = Action.async { session =>
    gameDao.withPlayer(id).map { games: Seq[GameWithPlayers] =>
      Ok(Json.toJson(games))
    }
  }

  def recentGames = Action.async {
    gameDao.recent().map { games: Seq[GameWithPlayers] =>
      Ok(Json.toJson(games))
    }
  }

}
