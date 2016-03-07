var React = require('react');
var DefaultOption = require('./DefaultOption.jsx');
var AddrOption = require('./AddrOption.jsx');

var ProvinceSelect = React.createClass({
  handleChange: function() {
    this.props.onUserSelect(this.refs.provSelect.value);
  },  
  render: function() {
    var options=[];
    options.push(<DefaultOption />);
    this.props.provinces.forEach(function(addr){
      options.push(<AddrOption addr={addr} key={addr.value} />);
    }.bind(this));
    return (
        <li className="clearfix">
            <div className="fl a">省份</div>
            <div className="fl b">
                <div className="new-select-wp" id="prov">
                    <select 
                      className="select-31" 
                      id="prov_select" 
                      name="prov" 
                      value={this.props.initSelectedValue}
                      ref="provSelect"
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


module.exports = ProvinceSelect;
