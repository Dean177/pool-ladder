package dao

import helpers.WithDataBaseSpecification
import models.{Player, EloRating}
import play.api.test.WithApplication
import play.api.libs.concurrent.Execution.Implicits.defaultContext


class EloRatingsDaoSpec extends WithDataBaseSpecification {
  "EloRatingsDao" should {
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
