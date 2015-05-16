package dao

import play.api.{Application, GlobalSettings}


class TestGlobal extends GlobalSettings {
  override def onStart(app: Application) = {
    TestData.insertTestDataIfNotPresent()
  }
}
