import java.util.Date

import play.api._
import models._
import dao.PlayerDAO

object Global extends GlobalSettings {

  override def onStart(app: Application) = {
    def playersDao = new PlayerDAO

    playersDao.count().map { count =>
      if (!count. 0) {
        val testPlayers = Seq(
          Player(Some(1), "Goat", isActive = true, new Date()),
          Player(Some(2), "Badger", isActive = true, new Date()),
          Player(Some(3), "Vole", isActive = true, new Date()),
          Player(Some(4), "Pig", isActive = true, new Date())
        )


      }
    }
    TestData.insert()
  }

  object TestData {
    def insert(): Unit = {
      if (Players.count == 0) {

//          Seq(
//            Game(Some(1), 1, 2, new Date(6)),
//            Game(Some(2), 2, 3, new Date(7)),
//            Game(Some(3), 1, 3, new Date(8)),
//            Game(Some(4), 4, 2, new Date(9))
//          ).foreach(Games.create)

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
//          ).foreach(EloRatings.create)
      }
    }
  }
}