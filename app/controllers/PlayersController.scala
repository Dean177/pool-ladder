package controllers

import models.{Players, Player}
import play.api.mvc._
import play.api.libs.json._
import play.api.db.slick._

object PlayersController extends Controller {

  def all = DBAction { implicit session =>
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