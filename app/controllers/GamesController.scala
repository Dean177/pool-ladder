package controllers

import dao.GamesDAO
import models.Game
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.mvc.{BodyParsers, Action, Controller}

import play.api.libs.json._

class GamesController extends Controller {
  def gameDao = new GamesDAO

  def create = Action(BodyParsers.parse.json) { implicit request =>
    val game = request.body.as[Game]
//    val createdGame = Games.find(Games.create(game))
//    EloRatings.createForGame(createdGame)
    Ok(Json.toJson(game))
  }

  def gamesByPlayer(id: Long) = Action { implicit session =>
//    Ok(Json.toJson(Games.withPlayer(id)))
    Ok("TODO")
  }

  def recentGames = Action { implicit session =>
//    Ok(Json.toJson(Games.recent()))
    Ok("TODO")
  }
}