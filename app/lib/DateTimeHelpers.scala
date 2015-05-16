package lib

import java.sql.Timestamp

object DateTimeHelpers {
  def now(): Timestamp = new Timestamp(System.currentTimeMillis())
}
