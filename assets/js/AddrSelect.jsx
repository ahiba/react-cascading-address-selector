var React = require('react');
var DefaultOption = require('./DefaultOption.jsx');
var AddrOption = require('./AddrOption.jsx');

var AddrSelect = React.createClass({
  handleChange: function() {
    this.props.onUserSelect(this.refs.addrSelect.value);
  },   
  render: function() {
    var options=[];
    options.push(<DefaultOption />);
    this.props.addrs.forEach(function(addr){
      options.push(<AddrOption addr={addr} key={addr.value} />);
    }.bind(this));
    return (
        <li className="clearfix">
            <div className="fl a">{this.props.addrCNTitle}</div>
            <div className="fl b">
                <div className="new-select-wp" id={this.props.addrENTitle}>
                    <select
                      className="select-31" 
                      id={this.props.addrENTitle+"_select"} 
                      name={this.props.addrENTitle} 
                      value={this.props.initSelectedValue}
                      ref="addrSelect"                      
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

module.exports = AddrSelect;
