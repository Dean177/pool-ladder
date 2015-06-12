package dao

import java.sql.Timestamp

import lib.DateTimeHelpers
import models.{EloRating, Game, Player}
import scala.concurrent.Await
import scala.concurrent.duration._
import scala.language.postfixOps

object TestData {

  val testPlayers = Seq(
    Player(1, "Goat", isActive = true, new Timestamp(1431799802051l)),
    Player(2, "Badger", isActive = true, DateTimeHelpers.now()),
    Player(3, "Vole", isActive = true, DateTimeHelpers.now()),
    Player(4, "Pig", isActive = true, DateTimeHelpers.now()),
    Player(5, "Boar", isActive = false, DateTimeHelpers.now())
  )
  val testGames = Seq(
    Game(1, 1, 2, DateTimeHelpers.now()),
    Game(2, 2, 3, DateTimeHelpers.now()),
    Game(3, 1, 3, DateTimeHelpers.now()),
    Game(4, 4, 2, DateTimeHelpers.now())
  )
  val testRatings = Seq(
    EloRating(1, 1, 1, 15, 1015, new Timestamp(1431799802051l)),
    EloRating(2, 1, 2, -15, 985, new Timestamp(1431799802051l)),

    EloRating(3, 2, 2, 16, 1001, new Timestamp(1431799802031l)),
    EloRating(4, 2, 3, -16, 984, new Timestamp(1431799802031l)),

    EloRating(5, 3, 1, 13, 1028, new Timestamp(1431799702031l)),
    EloRating(6, 3, 3, -13, 987, new Timestamp(1431799702031l)),

    EloRating(7, 4, 4, 14, 1014, new Timestamp(1431799602031l)),
    EloRating(8, 4, 2, -14, 970, new Timestamp(1431799602031l))
  )

  def insertTestDataIfNotPresent() = {
    def playersDao = new PlayerDAO
    def gamesDao = new GamesDao
    def eloRatingDao = new EloRatingsDao

    val insertedPlayers = Await.result(playersDao.count(), 3 seconds)
    if (insertedPlayers == 0) {
      Await.result(playersDao.insert(testPlayers), 3 seconds)
      Await.result(gamesDao.insert(testGames), 3 seconds)
      Await.result(eloRatingDao.insert(testRatings), 3 seconds)
    }
  }
}