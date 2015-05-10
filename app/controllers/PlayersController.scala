package controllers

import dao.PlayerDAO
import models.Player
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.mvc.{BodyParsers, Action, Controller}

import play.api.libs.json._


class PlayersController extends Controller {
  def playerDao = new PlayerDAO

  def all = Action.async { implicit request =>
    playerDao.all().map { players: Seq[Player] =>
      Ok(Json.toJson(players))
    }
  }

  def get(id: Long) = Action.async { implicit request =>
    playerDao.find(id).map {
      case Some(player) => Ok(Json.toJson(player))
      case None => Ok("TODO")
    }
  }

  def create = Action(BodyParsers.parse.json) { implicit request =>
    val newPlayer = request.body.as[Player]
//    Ok(Json.toJson(Players.find(Players.create(newPlayer))))
    Ok(Json.toJson(newPlayer))
  }

  def update(id: Long) = Action(parse.json) { implicit request =>
//    val player = request.body.as[Player]
//    Ok(Json.toJson(Players.find(Players.update(player))))
    Ok("TODO")
  }
}