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
var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

// require('backbone.localStorage');
// var $ = require('jquery');
// var React = require('react');


// var App = require('./app.js').App
var literal = require('./app.js').Literal

window.addEventListener('load', app)

function app() {
    // start app
    // new App();
    literal.printSayHello('test number 2');
    // var appView = new AppView();
    
}


(function($) {
var contacts = [
        { name: "Contact 1", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
        { name: "Contact 2", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
        { name: "Contact 3", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "friend" },
        { name: "Contact 4", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "colleague" },
        { name: "Contact 5", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" },
        { name: "Contact 6", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "colleague" },
        { name: "Contact 7", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "friend" },
        { name: "Contact 8", address: "1, a street, a town, a city, AB12 3CD", tel: "0123456789", email: "anemail@me.com", type: "family" }
    ];

var Contact = Backbone.Model.extend({
	defaults: {
		photo: "./img/placeholder.png"
	}
});

var Directory = Backbone.Collection.extend({
	model: Contact
});

var ContactView = Backbone.View.extend({
	tagName: 'article',
	className: 'contact-container',
	template: _.template($('#contactTemplate').html()),

	render: function () {
		var tmpl = this.template;

		$(this.$el).html(tmpl(this.model.toJSON()));
		return this;
	}
});

var DirectoryView = Backbone.View.extend({
    el: $("#contacts"),
 
    initialize: function () {
        this.collection = new Directory(contacts);
        this.render();
    },
 
    render: function () {
        var that = this;
        _.each(this.collection.models, function (item) {
            that.renderContact(item);
        }, this);
    },
 
    renderContact: function (item) {
        var contactView = new ContactView({
            model: item
        });
        $(this.$el).append(contactView.render().el);
    }
});
var directory = new DirectoryView();
}($));
// var AppView = Backbone.View.extend({
//       // el - stands for element. Every view has a element associate in with HTML
//       //      content will be rendered.
//       el: '.container',
//       // It's the first function called when this view it's instantiated.
//       template: _.template("<h3>Hello <%= who %></h3>"),

//       initialize: function(){
//         this.render();
//       },
//       // $el - it's a cached jQuery object (el), in which you can use jQuery functions
//       //       to push content. Like the Hello World in this case.
//       render: function(){
//         this.$el.html(this.template({who: 'world!'}));
//       }
// });

// var appList = {};

// appList.Todo = Backbone.Model.extend({
//     defaults: {
//         title: '',
//         completed: false
//     }
// });

// appList.TodoList = Backbone.Collection.extend({
// 	model: appList.Todo
// });

// appList.todoList = new appList.TodoList();
// debugger;

