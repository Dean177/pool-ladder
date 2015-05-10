package dao

import java.util.Date

import lib.EloRatingSystem
import models.Game
import play.api.libs.json.Json

class EloRatingsDAO {

}


//object EloRating {
//  implicit val ratingFormat = Json.format[EloRating]
//}
//
//class EloRatings(tag: Tag) extends Table[EloRating](tag, "EloRating") {
//  def id = column[Long]("id", O.PrimaryKey, O.AutoInc)
//  def gameId = column[Long]("gameId")
//  def playerId = column[Long]("playerId")
//  def change = column[Int]("change")
//  def newRating = column[Int]("newRating")
//  def date = column[Date]("date")
//
//  def player = foreignKey("playerForeignKey", playerId, Players.players)(_.id)
//  def game = foreignKey("gameForeignKey", gameId, Games.games)(_.id)
//
//  def * = (id.?, gameId, playerId, change, newRating, date) <> ((EloRating.apply _).tupled, EloRating.unapply)
//}
//
//object EloRatings {
//  val ratings = TableQuery[EloRatings]
//  val eloRatingSystem = new EloRatingSystem()
//  val factor = 50
//  val volatility = 400
//
//  def createForGame(game: Game)(implicit s: Session): Unit = {
//    game.id.map { gameId =>
//      val winnerRating = getLatestRating(game.winnerId).newRating
//      val loserRating = getLatestRating(game.loserId).newRating
//      val scoreChange = eloRatingSystem.pointsExchanged(winnerRating, loserRating)
//
//      val winnerEloRating = new EloRating(None, gameId, game.winnerId, scoreChange, winnerRating + scoreChange, game.playedOn)
//      create(winnerEloRating)
//
//      val loserEloRating = new EloRating(None, gameId, game.loserId, -scoreChange, loserRating - scoreChange, game.playedOn)
//      create(loserEloRating)
//    }
//  }
//
//  def create(rating: EloRating)(implicit s: Session): Long = {
//    (ratings returning ratings.map(_.id)) += rating
//  }
//
//  def getLatestRating(playerId: Long)(implicit s: Session): EloRating = {
//    ratings.filter(_.playerId === playerId).sortBy(_.date.desc).first
//  }
//
//  def getRatingsByPlayer(playerId: Long)(implicit s: Session): List[EloRating] = {
//    ratings.filter(_.playerId === playerId).list
//  }
//}