package repositories

import helpers.WithDataBaseSpecification
import play.api.test.WithApplication
import play.api.libs.concurrent.Execution.Implicits.defaultContext


class GamesRepoSpec extends WithDataBaseSpecification {
  "GamesRepo" should {
    "Return true when a game is the most recent" in new WithApplication(WithTestData) {
      val gamesRepo = new GamesRepo
      gamesRepo.isMostRecent(4).map( _ should_== false)
    }

    "Return false when a game is not the most recent" in new WithApplication(WithTestData) {
      val gamesRepo = new GamesRepo
      gamesRepo.isMostRecent(1).map( _ should_== true)
    }

  }
}
