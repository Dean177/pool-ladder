package models

import java.util.Date

case class EloRating(id: Option[Long] = None, gameId: Long, playerId: Long, change: Int, newRating: Int, date: Date)
