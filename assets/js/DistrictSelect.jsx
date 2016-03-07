var React = require('react');
var DefaultOption = require('./DefaultOption.jsx');
var AddrOption = require('./AddrOption.jsx');

var DistrictSelect = React.createClass({
  handleChange: function() {
    this.props.onUserSelect(this.refs.distSelect.value);
  },   
  render: function() {
    var options=[];
    options.push(<DefaultOption />);
    this.props.districts.forEach(function(addr){
      options.push(<AddrOption addr={addr} key={addr.value} />);
    }.bind(this));
    return (
        <li className="clearfix">
            <div className="fl a">区/县</div>
            <div className="fl b">
                <div className="new-select-wp" id="district">
                    <select 
                      className="select-31" 
                      id="district_select" 
                      name="district" 
                      value={this.props.initSelectedValue}
                      ref="distSelect"                      
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


module.exports = DistrictSelect;
