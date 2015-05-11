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
import Graphs from './graphs/graphs';
import Records from './records/records';
import NotFound from './404';

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
    <Route name="graphs" handler={Graphs} />
    <Route name="records" handler={Records} />
    <Route name="live" handler={Live} />

    <NotFoundRoute handler={NotFound} />
  </Route>
);

RunRouter(routes, HistoryLocation, (Handler) => {
  React.render(<Handler />, document.body);
});