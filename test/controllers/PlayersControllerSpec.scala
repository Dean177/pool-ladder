package controllers

import dao.TestGlobal
import models.Player
import org.specs2.mutable.Specification
import play.api.libs.json.{JsValue, Json}
import play.api.test.Helpers._
import play.api.test._

class PlayersControllerSpec extends Specification {

  "PlayersController" should {
    val fakeApp = FakeApplication(withGlobal = Some(new TestGlobal()))

    "Return an array of players" in new WithApplication(fakeApp) {
      val Some(result) = route(FakeRequest(GET, "/api/players"))

      status(result) mustEqual OK
      contentType(result) mustEqual Some("application/json")

      val players = contentAsJson(result).as[List[Player]]
      players should not be empty
    }

    "Can create a new player with only a name" in new WithApplication {
      val newPlayerJson: JsValue = Json.toJson(NewPlayer(name = "Dave"))
      val Some(responseJson)  = route(FakeRequest(POST, "/api/players", FakeHeaders(), newPlayerJson))

      status(responseJson) mustEqual OK
      contentType(responseJson) mustEqual Some("application/json")

      val responsePlayer = contentAsJson(responseJson).as[Player]
      responsePlayer.id mustNotEqual None
      responsePlayer.name mustEqual "Dave"
      responsePlayer.isActive mustEqual true
    }
  }
}
