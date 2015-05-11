package controllers

import java.sql.Date

import dao.{EloRatingsDAO, GamesDAO}
import lib.DateTimeHelpers
import models.Game
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.mvc.{Action, Controller}

import play.api.libs.json._

case class NewGame(winnerId: Long, loserId: Long)
object NewGame {
  implicit val newGameFormat = Json.format[NewGame]
}

class GamesController extends Controller {
  val gameDao = new GamesDAO
  val eloRatingsDao = new EloRatingsDAO

  def create = Action.async(parse.json) { request =>
    val game: NewGame = request.body.as[NewGame]

    gameDao.create(Game(None, game.winnerId, game.loserId, DateTimeHelpers.now)).map { game =>
      Ok(Json.toJson(game))
    }
//    eloRatingsDao.createForGame(createdGame)
  }

  def gamesByPlayer(id: Long) = Action.async { session =>
    gameDao.withPlayer(id).map { games: Seq[Game] =>
      Ok(Json.toJson(games))
    }
  }

  def recentGames = Action.async {
    gameDao.recent().map { games: Seq[Game] =>
      Ok(Json.toJson(games))
    }
  }
}
