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
import Rules from './rules/rules';
import Live from './live/live';
import Records from './records/records';
import NotFound from './404';

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
import injectTapEventPlugin from "react-tap-event-plugin";
injectTapEventPlugin();

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