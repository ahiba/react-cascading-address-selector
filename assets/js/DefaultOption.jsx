
var React = require('react');

var DefaultOption = React.createClass({
  render: function() {
    return (
      <option 
         value = ''
      >
      {'请选择...'}
      </option>
      );
  }
});

module.exports = DefaultOption;
