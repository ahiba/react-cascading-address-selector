var React = require('react');
var ReactDOM = require('react-dom');
var CascadingAddressForm = require('./CascadingAddressForm');
require('../less/style.less');

ReactDOM.render(
  <CascadingAddressForm 
    address={''} 
    initProvSelectedValue={0}//初始选择0空，1北京，2天津等等
    initCitySelectedValue={0}//初始选择城市0空
    initDistSelectedValue={0}//初始选择区域0空
  />,
  document.getElementById('CascadingAddressForm')
);
