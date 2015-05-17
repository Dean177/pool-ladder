package dao

import helpers.WithDataBaseSpecification
import lib.DateTimeHelpers
import models.{Game, Player, EloRating}
import play.api.test.WithApplication
import play.api.libs.concurrent.Execution.Implicits.defaultContext


class EloRatingsDaoSpec extends WithDataBaseSpecification {
  "EloRatingsDao" should {
    "Return the eloRatings created for a new game" in new WithApplication(WithTestData) {
      val winnerId = 1
      val loserId = 2
      val game = Game(Some(3), winnerId, loserId, DateTimeHelpers.now())
      val eloRatingsDao = new EloRatingsDao

      eloRatingsDao.createForGame(game).map { eloRatings =>
        eloRatings should have length 2
        eloRatings.head.change shouldNotEqual 0
      }
    }

    "List the players and ratings" in new WithApplication(WithTestData) {
      val eloRatingsDao = new EloRatingsDao
      eloRatingsDao.latest().map { playerRatings: Seq[(Player, EloRating)] =>
        val playerIds: Seq[Long] = playerRatings.flatMap { case (player, rating) => player.id }

        playerRatings should not be empty
        // Each player should only have one entry
        playerIds.length shouldEqual playerIds.distinct.length
      }
    }

  }
}
