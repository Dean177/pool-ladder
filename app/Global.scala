import java.sql.Date

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
          Player(Some(1), "Goat", isActive = true, new Date(1)),
          Player(Some(2), "Badger", isActive = true, new Date(2)),
          Player(Some(3), "Vole", isActive = true, new Date(3)),
          Player(Some(4), "Pig", isActive = true, new Date(4))
        )

        Await.result(playersDao.insert(testPlayers), 5 seconds)

        val testGames = Seq(
          Game(Some(1), 1, 2, new Date(6)),
          Game(Some(2), 2, 3, new Date(7)),
          Game(Some(3), 1, 3, new Date(8)),
          Game(Some(4), 4, 2, new Date(9))
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