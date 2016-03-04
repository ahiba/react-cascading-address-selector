var React = require('react');

var DistrictOption = React.createClass({
  render: function() {
    return (
      <option 
         value = {this.props.district.value}
      >
      {this.props.district.name}
      </option>
      );
  }
});


module.exports = DistrictOption;
