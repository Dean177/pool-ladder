package controllers

import play.api.mvc.{Action, Controller}


class ApplicationController extends Controller {
  def index(any: String) = Action {
    Ok(views.html.index())
  }
}