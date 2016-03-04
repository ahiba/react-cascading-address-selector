var React = require('react');

var ProvinceOption = React.createClass({
  render: function() {
    return (
      <option 
         value = {this.props.province.value}
      >
      {this.props.province.name}
      </option>
      );
  }
});


module.exports = ProvinceOption;
