package controllers

import helpers.WithDataBaseSpecification
import models.{GameWithPlayers, Game}
import play.api.libs.json.Json
import play.api.test.Helpers._
import play.api.test._

class GamesControllerSpec extends WithDataBaseSpecification {
  "GamesController" should {

    "Be able to create a game" in new WithApplication(WithTestData) {
      val newGameJson = Json.toJson(NewGame(winnerId = 1, loserId = 2))
      val Some(result) = route(FakeRequest(POST, "/api/games", FakeHeaders(), newGameJson))

      status(result) mustEqual OK
      contentType(result) mustEqual Some("application/json")

      val responseGame = contentAsJson(result).as[Game]
      responseGame.id shouldNotEqual None
    }

    "Return an error when attempting to delete a game which is not the most recent" in new WithApplication(WithTestData) {
      val Some(result) = route(FakeRequest(DELETE, "/api/games/1"))
      status(result) shouldEqual CONFLICT
    }.pendingUntilFixed("TODO find out why this is returning ok!")

    "Delete the most recently added game" in new WithApplication(WithTestData) {
      val Some(result) = route(FakeRequest(DELETE, "/api/games/4"))
      status(result) shouldEqual OK
    }

    "Retrieve all games by a player" in new WithApplication(WithTestData) {
      val playerId = 1
      val Some(gameJson) = route(FakeRequest(GET, s"/api/players/$playerId/games"))
      val games = contentAsJson(gameJson).as[Seq[Game]]

      games should not be empty
      // TODO all games should have a winner or loser of the player
    }

    "Get all recently played games" in new WithApplication(WithTestData) {
      val Some(gameJson) = route(FakeRequest(GET, "/api/games"))
      val games = contentAsJson(gameJson).as[Seq[GameWithPlayers]]

      games should not be empty
    }
  }
}
