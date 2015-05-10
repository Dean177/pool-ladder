package controllers

import dao.PlayerDAO
import javax.inject.Inject
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.mvc.Action
import play.api.mvc.Controller
import play.api.libs.json._


class PlayersController @Inject() (playersDAO: PlayerDAO) extends Controller {

  def all() = Action.async {
    playersDAO.all().map {
      case players => Ok(Json.toJson(players))
    }
  }

  def get(id: Long) = Action.async {
    playersDAO.find(id).map {
      case Some(player) => Ok(Json.toJson(player))
      case None => Ok("TODO")
    }
  }

  def create = Action { implicit requestSession =>
//    val newPlayer = requestSession.body.as[Player]
//    Ok(Json.toJson(Players.find(Players.create(newPlayer))))
    Ok("TODO")
  }

  def update(id: Long) = Action(parse.json) { implicit request =>
//    val player = request.body.as[Player]
//    Ok(Json.toJson(Players.find(Players.update(player))))
    Ok("TODO")
  }
}