import React from 'react';
import {
  run as RunRouter,
  Route,
  RouteHandler,
  DefaultRoute,
  NotFoundRoute,
  HistoryLocation
} from 'react-router';

import App from './layout/app';

import PlayersSection from './players/PlayersSection';
import Players from './players/Players';
import NewPlayer from './players/NewPlayer';
import PlayerDetail from './players/PlayerProfile';

import GamesSection from './games/GamesSection';
import RecentGames from './games/RecentGames';
import NewGame from './games/NewGame';

import Leaderboard from './leaderboard/Leaderboard';
import Rules from './rules/Rules';
import Live from './live/live';
import Records from './records/records';
import NotFound from './404';

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

// And this just doesnt exist.
Array.prototype.last = function() { return this[this.length - 1]; };

// Until something like listening for updates via a websocket is implemented, poll for changes
import PlayerActions from './actions/PlayerActions';
import GameActions from './actions/GameActions.js';
import RatingActions from './actions/RatingActions.js';
var shouldPoll = true;
window.shouldPoll = shouldPoll;
const pollForChanges = () => {
  if (shouldPoll) {
    PlayerActions.loadAllPlayers();
    GameActions.getRecentGames();
    RatingActions.getLatestRatings();
  }
};
pollForChanges();
setInterval(pollForChanges, 10000);

let routes = (
  <Route name="app" handler={App} path="/">
    <DefaultRoute name="leaderboard" handler={Leaderboard} />

    <Route path="players" name="players" handler={PlayersSection}>
      <DefaultRoute handler={Players} />
      <Route path="new" name="newPlayer" handler={NewPlayer} />
      <Route path=":playerId" name="player" handler={PlayerDetail} />
    </Route>

    <Route name="games" path="games" handler={GamesSection}>
      <DefaultRoute handler={RecentGames} />
      <Route path="new" name="newGame" handler={NewGame} />
    </Route>

    <Route name="rules" handler={Rules}></Route>
    <Route name="records" handler={Records} />
    <Route name="live" handler={Live} />

    <NotFoundRoute handler={NotFound} />
  </Route>
);

RunRouter(routes, HistoryLocation, (Handler) => {
  React.render(<Handler />, document.body);
});