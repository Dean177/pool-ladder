package controllers

import models.EloRatings
import play.api.mvc._
import play.api.libs.json._
import play.api.db.slick._

object EloRatingsController extends Controller {
  def ratingsByPlayer(id: Long) = DBAction { implicit session =>
    Ok(Json.toJson(EloRatings.getRatingsByPlayer(id)))
  }

  def latestRatingByPlayer(id: Long) = DBAction { implicit session =>
    Ok(Json.toJson(EloRatings.getLatestRating(id)))
  }
}
