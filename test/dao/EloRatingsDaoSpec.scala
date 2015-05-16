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
        playerRatings should not be empty
//        val playerIds: Seq[Option[Long]] = playerRatings.map((player: Player, rating: EloRating) => player.id)
//        val idLength = playerIds.flatten

//        idLength.length shouldEqual idLength.distinct.length
        playerRatings.length shouldEqual 4
      }
    }
  }
}
