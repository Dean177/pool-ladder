import java.sql.Date

import play.api._
import play.api.db.slick._
import play.api.Play.current
import models._

object Global extends GlobalSettings {

  override def onStart(app: Application) = {
    TestData.insert()
  }

  object TestData {
    def insert() = {
      DB.withTransaction { implicit session: Session =>
        if (Players.count == 0) {
          Seq(
            Player(Some(1), "Goat", new Date(1)),
            Player(Some(2), "Badger", new Date(2)),
            Player(Some(3), "Vole", new Date(3)),
            Player(Some(4), "Pig", new Date(4))
          ).foreach(Players.create)

          Seq(
            Game(Some(1), 1, 2, new Date(6)),
            Game(Some(2), 2, 3, new Date(7)),
            Game(Some(3), 1, 3, new Date(8)),
            Game(Some(4), 4, 2, new Date(9))
          ).foreach(Games.create)

          Seq(
            EloRating(None, 1, 1, 15, 1015, new Date(6)),
            EloRating(None, 1, 2, -15, 985, new Date(6)),

            EloRating(None, 2, 2, 16, 1001, new Date(7)),
            EloRating(None, 2, 3, -16, 984, new Date(7)),

            EloRating(None, 3, 1, 13, 1028, new Date(8)),
            EloRating(None, 3, 3, -13, 987, new Date(8)),

            EloRating(None, 4, 4, 14, 1014, new Date(9)),
            EloRating(None, 4, 2, -14, 970, new Date(9))
          ).foreach(EloRatings.create)
        }
      }
    }
  }
}