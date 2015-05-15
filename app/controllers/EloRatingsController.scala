package controllers

import dao.EloRatingsDao
import play.api.libs.json._
import play.api.libs.functional.syntax._
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.mvc.{Action, Controller}

class EloRatingsController extends Controller {
  val ratings = new EloRatingsDao

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
    ratings.latest().map { latestRatings: Seq[(Long, Option[Int])] =>
      implicit val writer: Writes[(Long, Option[Int])] = (
        (JsPath \ "playerId").write[Long] and
        (JsPath \ "peakRating").writeNullable[Int]
        tupled
      )
      Ok(Json.toJson(latestRatings))
    }
  }
}
