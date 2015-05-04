var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var App = require('./layout/app');

var Players = require('./players/Players');
var NewPlayer = require('./players/NewPlayer/NewPlayer');
var PlayerDetail = require('./players/PlayerDetail/Detail');
var PlayerSection = require('./players/Section');

var Rules = require('./rules/rules');
var Live = require('./live/live');
var Graphs = require('./graphs/graphs');
var Games = require('./games/RecentGames');
var Records = require('./records/records');
var Leaderboard = require('./leaderboard/leaderboard');
var NotFound = require('./404');

var routes = (
  <Route name="app" handler={App} path="/">
    <DefaultRoute name="leaderboard" handler={Leaderboard} />
    <Route name="games" handler={Games} />
    <Route name="rules" handler={Rules} />
    <Route name="graphs" handler={Graphs} />
    <Route name="records" handler={Records} />
    <Route name="live" handler={Live} />

    <Route path="players" name="players" handler={PlayerSection}>
      <DefaultRoute handler={Players} />
      <Route path="new" name="newPlayer" handler={NewPlayer} />
      <Route path=":playerID" name="player" handler={PlayerDetail} />
    </Route>

    <NotFoundRoute handler={NotFound} />
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(<Handler />, document.body);
});