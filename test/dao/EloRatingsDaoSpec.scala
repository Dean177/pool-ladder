package dao

import helpers.WithDataBaseSpecification
import play.api.test.WithApplication
import play.api.libs.concurrent.Execution.Implicits.defaultContext


class EloRatingsDaoSpec extends WithDataBaseSpecification {
  "EloRatingsDao" should {
    "List the players and ratings" in new WithApplication(WithTestData) {
      val eloRatingsDao = new EloRatingsDao
      eloRatingsDao.latest().map { playerRatings =>
        playerRatings should not be empty
      }
    }
  }
}
