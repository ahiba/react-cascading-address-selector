var React = require('react');
var DefaultOption = require('./DefaultOption.jsx');
var CityOption = require('./CityOption.jsx');

var CitySelect = React.createClass({
  handleChange: function() {
    this.props.onUserSelect(this.refs.citySelect.value);
  },   
  render: function() {
    var options=[];
    options.push(<DefaultOption />);
    this.props.cities.forEach(function(city){
      options.push(<CityOption city={city} key={city.value} />);
    }.bind(this));
    return (
        <li className="clearfix">
            <div className="fl a">{"市"}</div>
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
