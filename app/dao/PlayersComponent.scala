package dao

import java.sql.Date

import models.Player
import play.api.db.slick.HasDatabaseConfig
import slick.driver.JdbcProfile

trait PlayersComponent { self: HasDatabaseConfig[JdbcProfile] =>
  import driver.api._

  class PlayersTable(tag: Tag) extends Table[Player](tag, "Player") {
    def id = column[Long]("id", O.PrimaryKey, O.AutoInc)
    def name = column[String]("name")
    def isActive = column[Boolean]("isActive")
    def creationDate = column[Date]("creationDate")

    def * = (id.?, name, isActive, creationDate) <> ((Player.apply _).tupled, Player.unapply(_))
  }
}