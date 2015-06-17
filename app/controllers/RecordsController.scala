package controllers

import dao.EloRatingsDao
import models.{EloRating, Player}
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.libs.functional.syntax._
import play.api.libs.json._
import play.api.mvc.{Action, Controller}

import scala.language.postfixOps

class RecordsController extends Controller {
  val ratings = new EloRatingsDao

  def highestRatingsByPlayers() = Action.async {
    ratings.maximumRatingsForAll().map { latestRatings: Seq[(Long, Option[Int])] =>
      implicit val writer: Writes[(Long, Option[Int])] = (
        (JsPath \ "playerId").write[Long] and
        (JsPath \ "peakRating").writeNullable[Int]
        tupled
      )
      Ok(Json.toJson(latestRatings))
    }
  }

  def lowestRatingsByPlayer() = Action.async {
    ratings.minimumRatingsForAll().map { latestRatings: Seq[(Long, Option[Int])] =>
      implicit val writer: Writes[(Long, Option[Int])] = (
        (JsPath \ "playerId").write[Long] and
        (JsPath \ "peakRating").writeNullable[Int]
        tupled
      )
      Ok(Json.toJson(latestRatings))
    }
  }
}
