import lib.EloRatingSystem
import org.scalatestplus.play._

class EloRatingSystemSpec extends PlaySpec {

  "EloRatingSystem" should {

    "Give an expected outcome of 0.5 for equally rated players" in {
      val ratingSystem = new EloRatingSystem()

      ratingSystem.expectedOutcome(1000, 1000) mustBe 0.5
    }

    "Awards the correct number of points" in {
      val ratingSystem = new EloRatingSystem()

      ratingSystem.pointsExchanged(1020, 900) mustBe 10
    }
  }
}
