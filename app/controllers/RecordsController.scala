package controllers

import dao.EloRatingsDao
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.libs.functional.syntax._
import play.api.libs.json._
import play.api.mvc.{Action, Controller}

import scala.language.postfixOps


class RecordsController extends Controller {
  type RatingRecord = (Long, Option[Int])

  case class RecordCollection(maxRatingByPlayer: Seq[RatingRecord], minRatingsByPlayer: Seq[RatingRecord])

  val ratings = new EloRatingsDao

  def records() = Action.async {
    for {
      idToMaxRating: Seq[RatingRecord] <- ratings.maximumRatingsForAll()
      idToMinRating: Seq[RatingRecord] <- ratings.minimumRatingsForAll()
    } yield {


      implicit val ratingRecordWrites: Writes[RatingRecord] = (
        (JsPath \ "playerId").write[Long] and
        (JsPath \ "rating").writeNullable[Int]
        tupled
      )

      implicit val recordsWrites: Writes[RecordCollection] = (
        (JsPath \ "maxRatings").write[Seq[RatingRecord]] and
        (JsPath \ "minRatings").write[Seq[RatingRecord]]
      )(unlift(RecordCollection.unapply))

      Ok(Json.toJson(RecordCollection(idToMaxRating, idToMinRating)))
    }
  }
}
