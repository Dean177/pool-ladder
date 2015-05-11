package controllers

import java.sql.Date

import dao.PlayerDAO
import lib.DateTimeHelpers
import models.Player
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.mvc.{Action, Controller}

import play.api.libs.json._

case class NewPlayer(name: String)
object NewPlayer {
  implicit val newPlayerFormat = Json.format[NewPlayer]
}

class PlayersController extends Controller {
  val playerDao = new PlayerDAO

  def all = Action.async { request =>
    playerDao.all().map { players: Seq[Player] =>
      Ok(Json.toJson(players))
    }
  }

  def get(id: Long) = Action.async { request =>
    playerDao.find(id).map {
      case Some(player) => Ok(Json.toJson(player))
      case None => Ok("") // TODO return a 404
    }
  }

  def create = Action.async(parse.json) { request =>
    val newPlayer = request.body.as[NewPlayer]
    // TODO get the current date
    val playerToCreate = Player(None, newPlayer.name, isActive = true, DateTimeHelpers.now)
    playerDao.create(playerToCreate).map { createdPlayer =>
      Ok(Json.toJson(createdPlayer))
    }
  }

  def update(id: Long) = TODO
}