var React = require('react');

var CityOption = React.createClass({
  render: function() {
    return (
      <option 
         value = {this.props.city.value}
      >
      {this.props.city.name}
      </option>
      );
  }
});

module.exports = CityOption;
