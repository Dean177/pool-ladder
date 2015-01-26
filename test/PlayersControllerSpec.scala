import org.junit.runner._
import org.specs2.mutable._
import org.specs2.runner._
import play.api.test.Helpers._
import play.api.test._

@RunWith(classOf[JUnitRunner])
class PlayersControllerSpec extends Specification {

  "PlayersController" should {

    "send 404 on a bad request" in new WithApplication {
      route(FakeRequest(GET, "/boum")) must beNone
    }

    "Return an array of players" in new WithApplication {
      val players = route(FakeRequest(GET, "/players")).get

      status(players) must equalTo(OK)
      contentType(players) must beSome.which(_ == "application/json")

      // TODO test this has some players in it!
    }
  }
}
