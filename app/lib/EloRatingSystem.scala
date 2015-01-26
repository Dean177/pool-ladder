package lib

import scala.math._

class EloRatingSystem {
  val maxRatingChange: Int = 30
  
  def pointsExchanged(winnerRating: Int, loserRating: Int): Int = {
    val outcome = 1
    round(maxRatingChange * (outcome - expectedOutcome(winnerRating, loserRating))).toInt
  }

  def expectedOutcome(playerRating: Int, opponentRating: Int): Double = {
    1 / (1 + pow(10, (opponentRating - playerRating).toFloat / 400 ))
  }
}
