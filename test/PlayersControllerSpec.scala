import models.Player

import org.scalatest.Matchers._
import org.scalatestplus.play._
import play.api.test.Helpers._
import play.api.test.FakeRequest

class PlayersControllerSpec extends PlaySpec with OneAppPerSuite {

  "PlayersController" should {

    "send 404 on a bad request" in {
      route(FakeRequest(GET, "/boum")) mustBe None
    }

    "Return an array of players" in {
      val Some(result) = route(FakeRequest(GET, "/api/players"))

      status(result) mustBe OK
      contentType(result) mustBe Some("application/json")

      val players = contentAsJson(result).as[List[Player]]
      players should not be empty
    }
  }
}
