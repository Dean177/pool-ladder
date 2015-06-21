package helpers

import repositories.TestGlobal
import org.specs2.mutable.Specification
import play.api.test._

trait WithDataBaseSpecification extends Specification {
  def WithTestData = FakeApplication(withGlobal = Some(new TestGlobal()))
}
