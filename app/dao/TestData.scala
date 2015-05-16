package dao

import lib.DateTimeHelpers
import models.{EloRating, Game, Player}
import scala.concurrent.Await
import scala.concurrent.duration._
import play.api.libs.concurrent.Execution.Implicits._

object TestData {

  val testPlayers = Seq(
    Player(Some(1), "Goat", isActive = true, DateTimeHelpers.now()),
    Player(Some(2), "Badger", isActive = true, DateTimeHelpers.now()),
    Player(Some(3), "Vole", isActive = true, DateTimeHelpers.now()),
    Player(Some(4), "Pig", isActive = true, DateTimeHelpers.now()),
    Player(Some(5), "Boar", isActive = false, DateTimeHelpers.now())
  )
  val testGames = Seq(
    Game(Some(1), 1, 2, DateTimeHelpers.now()),
    Game(Some(2), 2, 3, DateTimeHelpers.now()),
    Game(Some(3), 1, 3, DateTimeHelpers.now()),
    Game(Some(4), 4, 2, DateTimeHelpers.now())
  )
  val testRatings = Seq(
    EloRating(None, 1, 1, 15, 1015, DateTimeHelpers.now()),
    EloRating(None, 1, 2, -15, 985, DateTimeHelpers.now()),

    EloRating(None, 2, 2, 16, 1001, DateTimeHelpers.now()),
    EloRating(None, 2, 3, -16, 984, DateTimeHelpers.now()),

    EloRating(None, 3, 1, 13, 1028, DateTimeHelpers.now()),
    EloRating(None, 3, 3, -13, 987, DateTimeHelpers.now()),

    EloRating(None, 4, 4, 14, 1014, DateTimeHelpers.now()),
    EloRating(None, 4, 2, -14, 970, DateTimeHelpers.now())
  )

  def insertTestDataIfNotPresent() = {
    def playersDao = new PlayerDAO
    def gamesDao = new GamesDao
    def eloRatingDao = new EloRatingsDao

    val insertedPlayers = Await.result(playersDao.count(), 1 seconds)
    if (insertedPlayers == 0) {
      Await.result(playersDao.insert(testPlayers), 1 seconds)
      Await.result(gamesDao.insert(testGames), 1 seconds)
      Await.result(eloRatingDao.insert(testRatings), 1 seconds)
    }
  }
}