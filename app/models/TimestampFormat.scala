package models

import java.sql.Timestamp
import java.text.SimpleDateFormat

import play.api.libs.json._

trait TimestampFormat {
  val format = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SS'Z'")
  implicit val timestampFormat = new Format[Timestamp] {
    def reads(json: JsValue): JsResult[Timestamp] = {
      JsSuccess(new Timestamp(format.parse(json.as[String]).getTime))
    }
    def writes(timestamp: Timestamp): JsValue = JsString(format.format(timestamp))
  }
}
