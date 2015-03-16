# README #
* Quick summary
[Play](https://www.playframework.com/documentation/2.3.x/Home),
[Slick](http://slick.typesafe.com/doc/2.1.0/introduction.html), 
[play-slick](https://github.com/playframework/play-slick/wiki/Usage),
[ScalaTest](http://scalatest.org/plus/play)

### Zero to hero ###
 - Install [Activator](https://www.playframework.com/documentation/2.3.x/Installing)
 - If using IntelliJ, make sure you have the scala plugin installed.
   + Open the directory using auto-import
   + Select the 'Application' scala class; right-click, and Run Play 2 App
 - Open a web browser and point to [http://localhost:9000](http://localhost:9000)
 - This will state that the database is empty ("Database 'default' needs evolution!") and offer some scripts to run; Click 'Apply this script now!'
 - The web server now shows a default page (saying "Serve the client")
 - The REST API is available like this: [http://localhost:9000/api/players](http://localhost:9000/api/players)

### Server:
 * Glicko2 ratings
 * Profile picture storage