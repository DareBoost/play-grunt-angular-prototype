package controllers

import play.api.mvc._

object UIViews extends controllers.AssetsBuilder {
  override def at(path: String, file: String): Action[AnyContent] = super.at(path, s"$file.html")
}
