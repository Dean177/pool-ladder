# README #



### Zero to hero ###
 - (Optional) Install [NVM](https://github.com/creationix/nvm) to manage Node versions
 - Install [Node](https://nodejs.org/) version *0.10.35* This is currently the only version which the 'Jest' test runner supports.
 - `npm install gulp-cli bower --save`
 - Install [SBT](http://www.scala-sbt.org/download.html) and ensure it is added to your PATH
 - `sbt run`

   
### Testing ###
To run the client tests: `npm test`.
To run the api tests `sbt test`.

Continuous integration is run at (https://circleci.com/gh/Dean177/pool-ladder)

### Libraries in use ###
[Play](https://www.playframework.com/documentation/2.4.x/Home),
[Slick](http://slick.typesafe.com/doc/3.0.0/), 
[Specs2](https://www.playframework.com/documentation/2.4.x/ScalaTestingWithSpecs2)

[React](https://facebook.github.io/react/docs/getting-started.html)
[React-Router](https://github.com/rackt/react-router/blob/master/docs/guides/overview.md)
[Reflux](https://github.com/spoike/refluxjs)
[React-Bootstrap](http://react-bootstrap.github.io/components.html)
[React-ChartJs](https://github.com/jhudson8/react-chartjs)
[Jest](https://facebook.github.io/jest/docs/tutorial.html#content)