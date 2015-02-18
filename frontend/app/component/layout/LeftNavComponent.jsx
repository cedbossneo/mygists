import React from 'react';
import Router from 'react-router';

var LeftNavComponent = React.createClass({
  mixins: [ Router.Navigation, Router.State ],

  render: function () {
    var menuItems = this.props.menuItems.map((item, index)=> {
      return <li><a onClick={this.onClick.bind(this, item.route)} key={item.route}>{item.text}</a></li>
    });
    return (
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">myGists</a>
            <ul className="right hide-on-med-and-down">
              {menuItems}
            </ul>
          </div>
        </nav>
    );
  },

  toggle:function () {
    this.refs.leftNav.toggle();
  },

  close: function () {
    this.refs.leftNav.close()
  },

  onClick: function(route) {
    this.transitionTo(route);
    this.refs.leftNav.close();
  },

  getSelectedIndex: function() {
    var currentItem;

    for (var i = this.props.menuItems.length - 1; i >= 0; i--) {
      currentItem = this.props.menuItems[i];
      if (currentItem.route && this.isActive(currentItem.route)) return i;
    };
  },

});

export default LeftNavComponent;
