package controllers

import dao.EloRatingsDAO
import play.api.libs.json.Json
import play.api.mvc._

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
}
