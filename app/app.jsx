'use strict';

import React from 'react';
import MainView from './views/MainView';
import GistsView from './views/GistsView';
import GistView from './views/GistView';
import NotFound from './views/404';
import injectTapEvent from 'react-tap-event-plugin';
import Router from 'react-router';

var { Route, DefaultRoute, RouteHandler, Link, NotFoundRoute } = Router;

injectTapEvent();

var routes = (
  <Route handler={ MainView } path="/">
    <DefaultRoute handler={ GistsView } />
    <NotFoundRoute handler={ NotFound } />

    <Route name="gists" handler={ GistsView } />
    <Route name="gist" path="/gist/:gist" handler={GistView} />
  </Route>
);

Router.run(routes, function (Handler, state) {
  console.log('route', state);
  React.render(<Handler params={ state.params } />, document.body);
});
