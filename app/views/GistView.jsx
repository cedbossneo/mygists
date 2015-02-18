import React from 'react';
import Router from 'react-router';
import request from 'superagent';
import Highlight from 'react-highlight';

var GistView = React.createClass({
  mixins: [Router.State],

  getInitialState: function() {
    return {gist: {files: []}};
  },

  componentDidMount: function(){
    this.getGist(this.getParams().gist);
  },

  render: function () {
    var files = Object.keys(this.state.gist.files).map((file, index)=> {
      var gistFile = this.state.gist.files[file];
      return <div className="row">
        <div className="col s12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{file}</span>
              <p><Highlight>{gistFile.content}</Highlight></p>
            </div>
            <div className="card-action">
              <a href={`https://gist.github.com/geowarin/${this.state.gist.id}`} target="_blank">View on github</a>
            </div>
          </div>
        </div>
      </div>
    });
    return (
    <div className='gistView'>
      {files}
    </div>
    );
  },

  getGist: function(id){
    request.get(`https://api.github.com/gists/${id}`, (err, res) => {
        this.setState({gist: res.body});
    });
  }
});

export default GistView;
