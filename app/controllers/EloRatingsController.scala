package controllers

import models.EloRatings
import play.api.mvc._
import play.api.libs.json._
import play.api.db.slick._

object EloRatingsController extends Controller {
  def ratingsByPlayer(id: Long) = Action {
//    Ok(Json.toJson(EloRatings.getRatingsByPlayer(id)))
    Ok()
  }

  def latestRatingByPlayer(id: Long) = Action {
//    Ok(Json.toJson(EloRatings.getLatestRating(id)))
    Ok()
  }
}
