package controllers

import play.api.mvc._

object ApplicationController extends Controller {
  def index(any: String) = Action {
    Ok(views.html.index())
  }
}