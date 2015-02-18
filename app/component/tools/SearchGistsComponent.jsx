import React from 'react';

var SearchGistsComponent = React.createClass({
  propTypes: {
    onSearchChange: React.PropTypes.func.isRequired
  },

  getInitialState: function() {
    return {search: null};
  },

  render: function () {
    return (
      <div className="input-field">
        <i className="mdi-action-search prefix"></i>
        <input id="icon_prefix" type="text" className="validate" onChange={this._handleSearchChange}/>
        <label for="icon_prefix">Search</label>
      </div>
    );
  },

  _handleSearchChange: function(e){
    this.props.onSearchChange(e.target.value);
  }
});

export default SearchGistsComponent;
