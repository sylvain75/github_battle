var React = require('react');
var PropTypes = React.PropTypes;

function ConfirmBattle ( props ) {
  return props.isLoading === true
    ? <p> Loading!! </p>
    : <p> CONDIRM BATTLE! </p>
}

module.exports = ConfirmBattle;
