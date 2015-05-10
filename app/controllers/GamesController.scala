package controllers

import play.api.mvc._

object GamesController extends Controller {

  def create = Action { implicit request =>
//    val game = request.body.as[Game]
//    val createdGame = Games.find(Games.create(game))
//    EloRatings.createForGame(createdGame)
//    Ok(Json.toJson(createdGame))
    Ok()
  }

  def gamesByPlayer(id: Long) = Action { implicit session =>
//    Ok(Json.toJson(Games.withPlayer(id)))
    Ok()
  }

  def recentGames = Action { implicit session =>
//    Ok(Json.toJson(Games.recent()))
    Ok()
  }
}