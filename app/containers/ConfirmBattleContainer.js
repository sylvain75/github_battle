var React = require('react');
var ConfirmBattle = require('../components/ConfirmBattle');
// var PropTypes = React.PropTypes;

var ConfirmBattleContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    console.log('getInitialState');
    return {
      isLoading: true,
      playerInfo: []
    }
  },

  componentWillMount: function() {
    console.log('componentWillMount');
  },

  componentDidMount: function() {
    var query = this.props.location.query;
    console.log('componentDidMount');
    // console.log( 'QUERY', query );
    // Fetch info from github then update state
  },

  componentWillReceiveProps: function(nextProps) {
    console.log('componentWillReceiveProps');
  },

  componentWillUnmount: function() {
    console.log('componentWillUnmount')
  },

  render: function() {
    return (
      <ConfirmBattle
        isLoading={ this.state.isLoading }
        playerInfo={ this.state.player }
      />
    );
  }

});

module.exports = ConfirmBattleContainer;
