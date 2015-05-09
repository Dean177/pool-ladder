import models.Player
import org.scalatest.Matchers._
import org.scalatestplus.play._
import play.api.test.Helpers._
import play.api.test.{FakeHeaders, FakeRequest}

class PlayersControllerSpec extends PlaySpec with OneAppPerSuite {

  "PlayersController" should {
    val createUrl = "/api/players"

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

    "Can create a new player with only a name" in {
      val newPlayerJson = """ { name: "Dave" } """
      val Some(createPlayerResult)  = route(FakeRequest(POST, createUrl, FakeHeaders(), newPlayerJson))

      status(createPlayerResult) mustBe OK
      contentType(createPlayerResult) mustBe Some("application/json")

      val responsePlayer = contentAsJson(createPlayerResult).as[Player]

      responsePlayer.name mustBe "Dave"
      responsePlayer.isActive mustBe true
    }
  }
}
