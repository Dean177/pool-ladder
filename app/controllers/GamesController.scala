package controllers

import play.api.mvc._

class GamesController extends Controller {

  def create = Action { implicit request =>
//    val game = request.body.as[Game]
//    val createdGame = Games.find(Games.create(game))
//    EloRatings.createForGame(createdGame)
//    Ok(Json.toJson(createdGame))
    Ok("TODO")
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