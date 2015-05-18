import dao.TestData
import play.api.{Application, GlobalSettings}


object Global extends GlobalSettings {
  override def onStart(app: Application) = {
    TestData.insertTestDataIfNotPresent()
  }
}
