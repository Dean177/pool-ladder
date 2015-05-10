package dao

import java.sql.Date
import models.Game
import play.api.db.slick.HasDatabaseConfig
import slick.driver.JdbcProfile


trait GamesComponent { self: HasDatabaseConfig[JdbcProfile] =>
  import driver.api._

  class GamesTable(tag: Tag) extends Table[Game](tag, "Game") {
    def id = column[Long]("id", O.PrimaryKey, O.AutoInc)
    def winnerId = column[Long]("winnerId")
    def loserId = column[Long]("loserId")
    def playedOn = column[Date]("playedOn")

    def * = (id.?, winnerId, loserId, playedOn) <> ((Game.apply _).tupled, Game.unapply)
  }
}
