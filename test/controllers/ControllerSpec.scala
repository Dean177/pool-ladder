package controllers

import dao.TestGlobal
import org.specs2.mutable.Specification
import play.api.test._

trait ControllerSpec extends Specification {
  def WithTestData = FakeApplication(withGlobal = Some(new TestGlobal()))
}
