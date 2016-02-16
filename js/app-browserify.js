// es5 polyfills, powered by es5-shim
require("es5-shim")

// es6 polyfills, powered by babel
require("babel/polyfill")


var Promise = require('es6-promise').Promise
// just Node?
// var fetch = require('node-fetch')
// Browserify?
// require('whatwg-fetch') //--> not a typo, don't store as a var

// other stuff that we don't really use in our own code
// var Pace = require("../bower_components/pace/pace.js")

// require your own libraries, too!
var bb = require('backbone');
// var $ = require('jquery');
// var React = require('react');


// var App = require('./app.js').App
var Literal = require('./app.js').Literal

window.addEventListener('load', app)

function app() {
    // start app
    // new App();
    Literal.printSayHello('test');
}
	
