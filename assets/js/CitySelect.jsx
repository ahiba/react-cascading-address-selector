var React = require('react');
var DefaultOption = require('./DefaultOption.jsx');
var AddrOption = require('./AddrOption.jsx');

var CitySelect = React.createClass({
  handleChange: function() {
    this.props.onUserSelect(this.refs.citySelect.value);
  },   
  render: function() {
    var options=[];
    options.push(<DefaultOption />);
    this.props.cities.forEach(function(addr){
      options.push(<AddrOption addr={addr} key={addr.value} />);
    }.bind(this));
    return (
        <li className="clearfix">
            <div className="fl a">市</div>
            <div className="fl b">
                <div className="new-select-wp" id="city">
                    <select
                      className="select-31" 
                      id="city_select" 
                      name="city" 
                      value={this.props.initSelectedValue}
                      ref="citySelect"                      
                      onChange={this.handleChange}
                    >                   
                      {options}     
                    </select>
                </div>
            </div>
        </li>
      );
  }
});

module.exports = CitySelect;
