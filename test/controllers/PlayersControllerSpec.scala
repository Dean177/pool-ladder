package controllers

import helpers.WithDataBaseSpecification
import models.Player
import play.api.libs.json.{JsString, JsValue, Json}
import play.api.test.Helpers._
import play.api.test._

class PlayersControllerSpec extends WithDataBaseSpecification {
  "PlayersController" should {
    "Return an map from id to player" in new WithApplication(WithTestData) {
      val Some(result) = route(FakeRequest(GET, "/api/players"))

      status(result) mustEqual OK
      contentType(result) mustEqual Some("application/json")

      val players = contentAsJson(result).as[Map[String, Player]]
      players should not be empty
    }

    "Can create a new player with only a name" in new WithApplication {
      val newPlayerJson: JsValue = Json.obj("name" -> JsString("Dave"))
      val Some(responseJson)  = route(FakeRequest(POST, "/api/players", FakeHeaders(), newPlayerJson))

      status(responseJson) mustEqual OK
      contentType(responseJson) mustEqual Some("application/json")

      val responsePlayer = contentAsJson(responseJson).as[Player]
      responsePlayer.id mustNotEqual None
      responsePlayer.name mustEqual "Dave"
      responsePlayer.isActive mustEqual true
    }

    "An invalid player returns a not found error" in new WithApplication {
      val Some(result) = route(FakeRequest(GET, "/api/players/-1"))
      status(result) mustEqual NOT_FOUND
    }
  }
}
