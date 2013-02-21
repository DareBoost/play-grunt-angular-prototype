package models

import play.api.libs.json._
import play.api.libs.functional.syntax._

case class User(
  id: Option[Long],
  email: String,
  firstName: String,
  lastName: String
)

object User {
  implicit val jsonWrite = new Writes[User] {
    def writes(u: User): JsValue = {
      Json.obj(
        "id" -> u.id,
        "email" -> u.email,
        "firstName" -> u.firstName,
        "lastName" -> u.lastName
      )
    }
  }

  implicit val jsonRead = (
    (__ \ 'id).readNullable[Long] ~
    (__ \ 'email).read[String] ~
    (__ \ 'firstName).read[String] ~
    (__ \ 'lastName).read[String]
  )(User.apply _)
}
