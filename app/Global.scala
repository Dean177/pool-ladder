import java.sql.Date

import lib.DateTimeHelpers

import scala.concurrent.duration._
import play.api._
import models._
import dao.{GamesDAO, PlayerDAO}
import play.api.libs.concurrent.Execution.Implicits.defaultContext

import scala.concurrent.Await

object Global extends GlobalSettings {

  override def onStart(app: Application) = {
    def playersDao = new PlayerDAO
    def gamesDao = new GamesDAO

    playersDao.count().map { count =>
      if (count == 0) {
        val testPlayers = Seq(
          Player(Some(1), "Goat", isActive = true, DateTimeHelpers.now),
          Player(Some(2), "Badger", isActive = true, DateTimeHelpers.now),
          Player(Some(3), "Vole", isActive = true, DateTimeHelpers.now),
          Player(Some(4), "Pig", isActive = true, DateTimeHelpers.now)
        )

        Await.result(playersDao.insert(testPlayers), 5 seconds)

        val testGames = Seq(
          Game(Some(1), 1, 2, DateTimeHelpers.now),
          Game(Some(2), 2, 3, DateTimeHelpers.now),
          Game(Some(3), 1, 3, DateTimeHelpers.now),
          Game(Some(4), 4, 2, DateTimeHelpers.now)
        )

        Await.result(gamesDao.insert(testGames), 5 seconds)

      }
    }
  }
}

//          Seq(
//            EloRating(None, 1, 1, 15, 1015, new Date(6)),
//            EloRating(None, 1, 2, -15, 985, new Date(6)),
//
//            EloRating(None, 2, 2, 16, 1001, new Date(7)),
//            EloRating(None, 2, 3, -16, 984, new Date(7)),
//
//            EloRating(None, 3, 1, 13, 1028, new Date(8)),
//            EloRating(None, 3, 3, -13, 987, new Date(8)),
//
//            EloRating(None, 4, 4, 14, 1014, new Date(9)),
//            EloRating(None, 4, 2, -14, 970, new Date(9))
//          )