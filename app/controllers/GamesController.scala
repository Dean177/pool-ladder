package controllers

import models._
import play.api.Play.current
import play.api.db.slick._
import play.api.libs.json._
import play.api.mvc._


object GamesController extends Controller {

  def create = DBAction(parse.json) { implicit request =>
    val game = request.body.as[Game]
    Ok(Json.toJson(Games.find(Games.create(game))))
  }

  def gamesByPlayer(id: Long) = DBAction { implicit session =>
    Ok(Json.toJson(Games.withPlayer(id)))
  }

  def recentGames = DBAction { implicit session =>
    Ok(Json.toJson(Games.recent()))
  }
}