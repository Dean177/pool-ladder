# README #
* Quick summary
[Play](https://www.playframework.com/documentation/2.3.x/Home),
[Slick](http://slick.typesafe.com/doc/2.1.0/introduction.html), 
[play-slick](https://github.com/playframework/play-slick/wiki/Usage),
[ScalaTest](http://scalatest.org/plus/play)

### Zero to hero ###
 - (Optional) Install [NVM](https://github.com/creationix/nvm) to manage Node versions
 - Install [Node](https://nodejs.org/) version *0.10.35* This is currently the only version which the test runner supports.
 - Install [SBT](http://www.scala-sbt.org/download.html) and ensure it is added to your PATH
 - `sbt run`
 - Open a web browser and point to [http://localhost:9000](http://localhost:9000)
 - This will state that the database is empty ("Database 'default' needs evolution!") and offer some scripts to run; Click 'Apply this script now!'  
   
### Testing ###
To run the client tests: `npm test`.
To run the api tests `sbt test`.

http://react-bootstrap.github.io/components.html?#input
https://github.com/jhudson8/react-chartjs