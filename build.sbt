import Gulp._
import play.PlayImport.PlayKeys.playRunHooks

name := "pool-ladder"

version := "0.1"

scalaVersion := "2.11.5"

libraryDependencies ++= Seq(
  jdbc ,
  "org.slf4j" % "slf4j-nop" % "1.6.4",
  "com.typesafe.play" %% "play-slick" % "1.0.0-RC1"
)

unmanagedResourceDirectories in Test <+=  baseDirectory ( _ /"target/web/public/test" )

playRunHooks <+= baseDirectory.map(base => Gulp(base))

lazy val `pool-ladder` = project.in(file("."))
  .enablePlugins(PlayScala)
  .settings(commands ++= JsCommands.all)

fork in run := false