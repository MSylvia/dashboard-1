var __isDevelopment = false;

if(window.location.host.indexOf('localhost') > -1){
    __isDevelopment = true;
}

var app=angular.module('CloudBoostDashboard',
	['angular-underscore',
    'ui.router',
    'kendo.directives',
    'ngPrettyJson',
    'ngCookies',
    'angular-intercom',
    'ngClipboard',
    'ngResource',
    'ui.grid',
    'ngTouch',
    'ui.grid.pagination',
    'ui.grid.resizeColumns',
    'ui.grid.edit',
    'ui.grid.selection',  
    'ui.grid.resizeColumns',    
    'uiSwitch',
    'ui.checkbox',
    'stripe',
    'chart.js'    
    ]);

var serverURL = null; 
var landingURL = null;
var sdk = document.createElement('script');

if(__isDevelopment){
    serverURL="http://localhost:3000";
    landingURL = "http://localhost:1444";
    sdk.setAttribute('src','http://localhost:4730/sdk/js/1.0.0');
}else{
    serverURL = "https://service.cloudboost.io";
    landingURL = "https://www.cloudboost.io";
    sdk.setAttribute('src','https://api.cloudboost.io/sdk/js/1.0.0');
}

document.head.appendChild(sdk);

app.config(['ngClipProvider', function(ngClipProvider) {
    ngClipProvider.setPath("bower_components/zeroclipboard/dist/ZeroClipboard.swf");
}]);

app.config(function() {
  Stripe.setPublishableKey('pk_test_ZLrh0BYVlddBmEPKUGalN8uQ');
});







