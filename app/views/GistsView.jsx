import React from 'react';
import request from 'superagent';
import Router from 'react-router';
import SearchGistsComponent from '../component/tools/SearchGistsComponent.jsx';

var GistsView = React.createClass({
  mixins: [ Router.Navigation ],

  getInitialState: function() {
    return {gists: [], search: null};
  },

  componentDidMount: function(){
    this.getGists();
  },

  render: function () {
    var gists = this.state.gists.map((gist, index)=> {
      if (this.state.search && gist.description.toLowerCase().indexOf(this.state.search.toLowerCase()) === -1){
        return null;
      }
      return <a className="collection-item" onClick={this.onClick.bind(this, gist.id)} key={gist.id}>
            {gist.description || `Gist: ${gist.id}`}
        </a>
    });
    return (
      <div>
        <div className="row">
          <div className="col s12 search">
            <SearchGistsComponent onSearchChange={this.onSearchChange}/>
          </div>
        </div>
        <div className="gists">
        <div className="collection">
          {gists}
        </div>
      </div>
      </div>
    );
  },

  onSearchChange: function(text) {
      this.setState({search: text});
  },

  onClick: function(gist) {
    this.transitionTo('gist', {gist: gist});
  },

  getGists: function(){
    request.get('https://api.github.com/users/geowarin/gists', (err, res) => {
      this.setState({gists: res.body});
    });
  }
});

export default GistsView;
