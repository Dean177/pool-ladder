import lib.EloRatingSystem
import org.junit.runner.RunWith
import org.scalatest.junit.JUnitRunner
import org.scalatestplus.play._

@RunWith(classOf[JUnitRunner])
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
