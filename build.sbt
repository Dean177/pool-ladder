name := "pool-ladder-server"

version := "0.1"

scalaVersion := "2.11.5"

libraryDependencies ++= Seq(
  jdbc ,
  "org.slf4j" % "slf4j-nop" % "1.6.4",
  "com.typesafe.slick" %% "slick" % "2.1.0",
  "com.typesafe.play" %% "play-slick" % "0.8.0",
  "org.scalatestplus" %% "play" % "1.2.0" % "test"
)

unmanagedResourceDirectories in Test <+=  baseDirectory ( _ /"target/web/public/test" )

lazy val `pool-ladder-server` = (project in file(".")).enablePlugins(PlayScala)