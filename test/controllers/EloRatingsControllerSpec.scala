package controllers

import helpers.WithDataBaseSpecification
import models.{Player, EloRating}
import play.api.test.Helpers._
import play.api.test._

class EloRatingsControllerSpec extends WithDataBaseSpecification {

  "EloRatingsController" should {
    val playerId = 1

    "Retrieve the current rating for all players" in new WithApplication(WithTestData) {
      val Some(result) = route(FakeRequest(GET, "/api/ratings/latest//"))

      status(result) mustEqual OK
    }

    "Retrieve a players rating history" in new WithApplication(WithTestData) {
      val Some(result) = route(FakeRequest(GET, s"/api/players/$playerId/ratings"))
      val ratings = contentAsJson(result).as[Seq[EloRating]]

      status(result) mustEqual OK
      ratings should not be empty
    }

    "Get a players current rating" in new WithApplication(WithTestData){
      val Some(result) = route(FakeRequest(GET, s"/api/players/$playerId/latestRating"))
      val rating = contentAsJson(result).as[EloRating]

      status(result) mustEqual OK
      rating.change should be > 0
    }
  }
}
