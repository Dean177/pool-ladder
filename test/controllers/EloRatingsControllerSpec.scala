package controllers

import models.EloRating
import play.api.test.Helpers._
import play.api.test._

class EloRatingsControllerSpec extends ControllerSpec {

  "EloRatingsController" should {
//    "Retrieve the current rating for all players" in new WithApplication(fakeApp//) {
//      val Some(result) = route(FakeRequest(GET, "/api/ratings/latest//"))
//      status(result) mustEqual OK
//    }

    "Retrieve a players rating history" in new WithApplication(WithTestData) {
      val playerId = 1
      val Some(result) = route(FakeRequest(GET, s"/api/players/$playerId/ratings"))
      status(result) mustEqual OK

      val ratings = contentAsJson(result).as[Seq[EloRating]]
      ratings should not be empty
    }

    "Get a players current rating" in new WithApplication(WithTestData){
      val playerId = 1
      val Some(result) = route(FakeRequest(GET, s"/api/players/$playerId/latestRating"))
      status(result) mustEqual OK

      val rating = contentAsJson(result).as[EloRating]
      rating.change should be > 0
    }
  }
}
