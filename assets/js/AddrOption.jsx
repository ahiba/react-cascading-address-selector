var React = require('react');

var AddrOption = React.createClass({
  render: function() {
    return (
      <option 
         value = {this.props.addr.value}
      >
      {this.props.addr.name}
      </option>
      );
  }
});


module.exports = AddrOption;
