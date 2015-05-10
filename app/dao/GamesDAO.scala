package dao


import java.util.Date
import scala.concurrent.Future
import models.Player
import models.Game
import play.api.Play
import play.api.db.slick.DatabaseConfigProvider
import play.api.db.slick.HasDatabaseConfig
import play.api.libs.concurrent.Execution.Implicits.defaultContext
import slick.driver.JdbcProfile

class GamesDAO extends PlayersComponent with HasDatabaseConfig[JdbcProfile] {
  protected val dbConfig = DatabaseConfigProvider.get[JdbcProfile](Play.current)

  import driver.api._

  private val Games = TableQuery[GamesTable]
  private val Players = TableQuery[PlayersTable]

  def recent(): Future[Seq[Game]] = {
    db.run(Games.sortBy(_.playedOn).result)
  }

  def create(game: Game): Future[Unit] = db.run(Games += game).map { _ => () }

  def find(id: Long): Future[Option[Game]] = {
    db.run(Games.filter(_.id === id).result.headOption)
  }

  def withPlayer(id: Long): Future[Seq[Game]] = {
    db.run(Games.filter(game => game.winnerId === id || game.loserId === id).sortBy(_.playedOn.desc).result)
  }


  class GamesTable(tag: Tag) extends Table[Game](tag, "Game") {
    implicit val dateColumnType = MappedColumnType.base[Date, Long](d => d.getTime, d => new Date(d))

    def id = column[Long]("id", O.PrimaryKey, O.AutoInc)
    def winnerId = column[Long]("winnerId")
    def loserId = column[Long]("loserId")
    def playedOn = column[Date]("playedOn")

    def * = (id.?, winnerId, loserId, playedOn) <> ((Game.apply _).tupled, Game.unapply)
  }
}
