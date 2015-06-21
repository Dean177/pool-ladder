package controllers

import repositories.EloRatingsRepo
import models.{EloRating, Player}
import play.api.libs.json._
import play.api.libs.functional.syntax._
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.mvc.{Action, Controller}

class EloRatingsController extends Controller {
  val ratings = new EloRatingsRepo

  def ratingsByPlayer(id: Long) = Action.async {
    ratings.getRatingsByPlayer(id).map { ratings =>
      Ok(Json.toJson(ratings))
    }
  }

  def latestRatingByPlayer(id: Long) = Action.async {
    ratings.getLatestRating(id).map { rating =>
      Ok(Json.toJson(rating))
    }
  }

  def latestRatings = Action.async {
    ratings.latest().map { playerRatings =>
      implicit val writer: Writes[(Player, EloRating)] = (
        (JsPath \ "player").write[Player] and
          (JsPath \ "rating").write[EloRating]
          tupled
        )
      Ok(Json.toJson(playerRatings))
    }
  }
}
