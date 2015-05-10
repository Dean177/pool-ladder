package controllers

import play.api.mvc._

class ApplicationController extends Controller {
  def index(any: String) = Action {
    Ok(views.html.index())
  }
}