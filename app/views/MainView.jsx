import React from 'react';
import Router from 'react-router';
import LeftNavComponent from '../component/layout/LeftNavComponent.jsx';

var { Route, DefaultRoute, RouteHandler, Link, NotFoundRoute } = Router;

var MainView = React.createClass({

  render: function () {
    var menuItems = [
      { route: '/gists', text: 'Gists' },
      { route: '/logout', text: 'Disconnect'}
      ];

    return (
      <div className="main">
        <div className="top">
          <LeftNavComponent menuItems={menuItems} />
        </div>
        <div className="content">
          <RouteHandler/>
        </div>
      </div>
    );
  }
});

export default MainView;
