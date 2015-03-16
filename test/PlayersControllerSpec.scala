import models.Player
import org.junit.runner._
import org.scalatest.Matchers._
import org.scalatestplus.play._
import org.scalatest.junit.JUnitRunner
import play.api.test.Helpers._
import play.api.test._

@RunWith(classOf[JUnitRunner])
class PlayersControllerSpec extends PlaySpec {

  "PlayersController" should {

    "send 404 on a bad request" in new WithApplication {
      route(FakeRequest(GET, "/boum")) mustBe None
    }

    "Return an array of players" in new WithApplication {
      val Some(result) = route(FakeRequest(GET, "/api/players"))

      status(result) mustBe OK
      contentType(result) mustBe Some("application/json")

      val players = contentAsJson(result).as[List[Player]]
      players should not be empty
    }
  }
}
