package lib

import java.sql.Date

object DateTimeHelpers {
  def now(): Date = new Date(currentMilliseconds())
  def currentMilliseconds(): Long = System.currentTimeMillis / 1000
}
