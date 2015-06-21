package controllers

import repositories.PlayersRepo
import lib.DateTimeHelpers
import models.Player
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.mvc.{Action, Controller}

import play.api.libs.json._

class PlayersController extends Controller {
  val playersRepo = new PlayersRepo

  def all = Action.async { request =>
    playersRepo.all().map { players: Seq[Player] =>
      val playersById: Map[String, Player] = players.groupBy(_.id).map { case(id, playerSeq) => (id.toString, playerSeq.head) }

      Ok(Json.toJson(playersById))
    }
  }

  def get(id: Long) = Action.async { request =>
    playersRepo.find(id).map {
      case Some(player) => Ok(Json.toJson(player))
      case None => NotFound(s"No player found with playerId: $id")
    }
  }

  def create = Action.async(parse.json) { request =>
    val name = (request.body \ "name").as[String]
    val playerToCreate = Player(0, name, isActive = true, DateTimeHelpers.now())
    playersRepo.create(playerToCreate).map { createdPlayer =>
      Ok(Json.toJson(createdPlayer))
    }
  }
}