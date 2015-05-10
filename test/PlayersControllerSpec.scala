import models.Player
import org.specs2.mutable.Specification
import play.api.test.Helpers._
import play.api.test.{FakeHeaders, FakeRequest}

class PlayersControllerSpec extends Specification {

  "PlayersController" should {
    val createUrl = "/api/players"

    "send 404 on a bad request" in {
      route(FakeRequest(GET, "/boum")) mustEqual None
    }

    "Return an array of players" in {
      val Some(result) = route(FakeRequest(GET, "/api/players"))

      status(result) mustEqual OK
      contentType(result) mustEqual Some("application/json")

      val players = contentAsJson(result).as[List[Player]]
      players should not be empty
    }

    "Can create a new player with only a name" in {
      val newPlayerJson = """ { name: "Dave" } """
      val Some(createPlayerResult)  = route(FakeRequest(POST, createUrl, FakeHeaders(), newPlayerJson))

      status(createPlayerResult) mustEqual OK
      contentType(createPlayerResult) mustEqual Some("application/json")

      val responsePlayer = contentAsJson(createPlayerResult).as[Player]

      responsePlayer.name mustEqual "Dave"
      responsePlayer.isActive mustEqual true
    }
  }
}
