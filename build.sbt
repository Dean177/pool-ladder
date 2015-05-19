import Gulp._
import play.sbt.PlayImport.PlayKeys.playRunHooks

name := "pool-ladder"

version := "0.1"

scalaVersion := "2.11.6"

resolvers += Resolver.sonatypeRepo("snapshots")

// Required for the specs2 dependency which is not available in the main repo.
resolvers += "Scalaz Bintray Repo" at "http://dl.bintray.com/scalaz/releases"

libraryDependencies ++= Seq(
  "org.slf4j" % "slf4j-nop" % "1.6.4",
  "com.typesafe.play" %% "play-slick" % "1.0.0-2015-05-03-a1c424e-SNAPSHOT",
  specs2 % Test
)

playRunHooks <+= baseDirectory.map(base => Gulp(base))

lazy val `pool-ladder` = project
  .in(file("."))
  .enablePlugins(PlayScala)
  .settings(commands ++= Seq(JsCommands.npm, JsCommands.gulp))

fork in run := false

routesGenerator := InjectedRoutesGenerator