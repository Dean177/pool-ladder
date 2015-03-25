package controllers

import play.api.mvc._

object ApplicationController extends Controller {
  def index = Action {
    Ok(views.html.index())
  }
}