var React = require('react');
var AddrSelect = require('./AddrSelect.jsx');
var addr_arr=require('./CNAddrArr');
//初始并格式化数据，格式[{value:"",name:""}，{value:"",name:""}...]
var PROVINCES = [],
    CITIES=[],
    DISTRICTS=[],
    ADDRESS="";
//省份下拉数据，其初始后从不改变
addr_arr[0].forEach(function(prov){
   PROVINCES.push({value:prov[0],name:prov[1]});
});
//获取市/区数据函数，动态，经常改变
function getOptionsArrayById(id){
   var arr=[];
   addr_arr[id].forEach(function(subArr){
      arr.push({value:subArr[0],name:subArr[1]});
   });
   return arr;
}

/***CascadingAddressForm组合后的总组件***/
var CascadingAddressForm = React.createClass({
  getInitialState: function() {//用省与市作为state，因为这两个值可能会经常变
    return {
      provSelectedValue: this.props.initProvSelectedValue,
      citySelectedValue: this.props.initCitySelectedValue,
      distSelectedValue: this.props.initDistSelectedValue,
    };
  },  
  handleUserProvSelect: function(provSelectedValue) {
    this.setState({
      provSelectedValue: provSelectedValue,
      citySelectedValue: 0,
      distSelectedValue: 0      
    });
  },
  handleUserCitySelect: function(citySelectedValue) {
    this.setState({
      citySelectedValue: citySelectedValue,
      distSelectedValue: 0   
    });
  },  
  handleUserDistSelect: function(distSelectedValue) {
    this.setState({
      distSelectedValue: distSelectedValue
    });
  },    

  render: function() {
    var newCities = (this.state.provSelectedValue !=0 ? getOptionsArrayById(this.state.provSelectedValue) : []);
    var newDistricts = (this.state.citySelectedValue!=0 ? getOptionsArrayById(this.state.citySelectedValue) : []);      
    return (
      <ul>
        <AddrSelect 
          addrs={PROVINCES} 
          initSelectedValue={this.state.provSelectedValue} 
          onUserSelect={this.handleUserProvSelect}
          addrCNTitle="省"
          addrENTitle="prov"
        />
        <AddrSelect 
          addrs={newCities} 
          initSelectedValue={this.state.citySelectedValue} 
          onUserSelect={this.handleUserCitySelect} 
          addrCNTitle="市"
          addrENTitle="city"          
        />
        <AddrSelect 
          addrs={newDistricts} 
          initSelectedValue={this.state.distSelectedValue} 
          onUserSelect={this.handleUserDistSelect} 
          addrCNTitle="区/县"
          addrENTitle="district"          
        /> 
        <li className="clearfix">
            <div className="fl a">具体地址</div>
            <div className="fl b">
                <textarea id="address" name="address" className="text" placeholder="请填写具体地址" required="" defaultValue={this.props.address}></textarea>
            </div>
        </li>                       
      </ul>
    );
  }
});

module.exports = CascadingAddressForm;
