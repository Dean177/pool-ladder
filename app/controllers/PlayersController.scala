package controllers

import models.{Player, Players}
import play.api.Logger
import play.api.db.slick._
import play.api.libs.json._
import play.api.mvc._

object PlayersController extends Controller {

  def all = DBAction { implicit session =>
    Logger.debug("All players")
    Ok(Json.toJson(Players.all()))
  }

  def get(id: Long) = DBAction { implicit session =>
    Ok(Json.toJson(Players.find(id)))
  }

  def create = DBAction(parse.json) { implicit requestSession =>
    val newPlayer = requestSession.body.as[Player]
    
    Ok(Json.toJson(Players.find(Players.create(newPlayer))))
  }

  def update(id: Long) = DBAction(parse.json) { implicit request =>
    val player = request.body.as[Player]

    Ok(Json.toJson(Players.find(Players.update(player))))
  }
}