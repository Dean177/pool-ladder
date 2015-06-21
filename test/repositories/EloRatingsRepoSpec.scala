package repositories

import helpers.WithDataBaseSpecification
import lib.DateTimeHelpers
import models.{Game, Player, EloRating}
import play.api.test.WithApplication
import play.api.libs.concurrent.Execution.Implicits.defaultContext


class EloRatingsRepoSpec extends WithDataBaseSpecification {
  "EloRatingsRepo" should {
    "Return the eloRatings created for a new game" in new WithApplication(WithTestData) {
      val winnerId = 1
      val loserId = 2
      val game = Game(3, winnerId, loserId, DateTimeHelpers.now())
      val eloRatingsRepo = new EloRatingsRepo

      eloRatingsRepo.createForGame(game).map { eloRatings =>
        eloRatings should have length 2
        eloRatings.head.change shouldNotEqual 0
      }
    }

    "List the players and ratings" in new WithApplication(WithTestData) {
      val eloRatingsRepo = new EloRatingsRepo
      eloRatingsRepo.latest().map { playerRatings: Seq[(Player, EloRating)] =>
        val playerIds: Seq[Long] = playerRatings.map { case (player, rating) => player.id }

        playerRatings should not be empty
        playerIds.length shouldEqual playerIds.distinct.length
      }
    }

    "Get a players current rating" in new WithApplication(WithTestData){
      val eloRatingsRepo = new EloRatingsRepo
      eloRatingsRepo.getLatestRating(1).map { rating =>
        rating.change should be > 0
      }
    }

    "Return the default rating when getting the current rating for an unrated player" in new WithApplication(WithTestData){
      val eloRatingsRepo = new EloRatingsRepo
      eloRatingsRepo.getLatestRating(5).map { rating =>
        rating.change shouldEqual 0
        rating.newRating shouldEqual 1000
      }
    }

  }
}
