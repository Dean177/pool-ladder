package controllers

import play.api.mvc._

class EloRatingsController extends Controller {
  def ratingsByPlayer(id: Long) = Action { implicit request =>
//    Ok(Json.toJson(EloRatings.getRatingsByPlayer(id)))
    Ok("TODO")
  }

  def latestRatingByPlayer(id: Long) = Action { implicit request =>
//    Ok(Json.toJson(EloRatings.getLatestRating(id)))
    Ok("TODO")
  }
}
