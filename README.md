# Pool Ladder #
[![Circle CI](https://circleci.com/gh/Dean177/pool-ladder/tree/master.svg?style=svg)](https://circleci.com/gh/Dean177/pool-ladder/tree/master)


### Zero to hero ###
 - Install [Java 8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html) and add it to your PATH.
 - (Optional) Install [NVM](https://github.com/creationix/nvm) to manage Node versions.
 - Install [Node](https://nodejs.org/) version *0.10.35* This is currently the only version which the 'Jest' test runner supports. 
 - Make sure you have all the dependencies in place for [node-gyp](https://github.com/TooTallNate/node-gyp) (required to the Jest test runner)
 - Ensure you have [Gulp](http://gulpjs.com/) installed globally `npm install gulp -g --save`
 - Install [SBT](http://www.scala-sbt.org/download.html) and ensure it is added to your PATH.
 - `sbt run`

   
### Testing ###
To run the client tests: `npm test`.
To run the server tests `sbt test`.

Continuous integration is run at (https://circleci.com/gh/Dean177/pool-ladder)

### Libraries in use ###
[Play](https://www.playframework.com/documentation/2.4.x/Home),
[Slick](http://slick.typesafe.com/doc/3.0.0/), 
[Specs2](https://www.playframework.com/documentation/2.4.x/ScalaTestingWithSpecs2)

[React](https://facebook.github.io/react/docs/getting-started.html)
[React-Router](http://rackt.github.io/react-router/)
[Reflux](https://github.com/spoike/refluxjs)
[Jest](https://facebook.github.io/jest/docs/tutorial.html#content)
[React-Bootstrap](http://react-bootstrap.github.io/components.html)
[React-ChartJs](https://github.com/jhudson8/react-chartjs)

