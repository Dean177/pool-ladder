package controllers

import dao.EloRatingsDAO
import models.EloRating
import play.api.libs.json.Json
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.mvc.{Action, Controller}

class EloRatingsController extends Controller {
  val ratings = new EloRatingsDAO

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
    ratings.latest().map { latestRatings: Seq[EloRating] =>
      Ok(Json.toJson(latestRatings))
    }
  }
}
