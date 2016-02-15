var $ = require('jquery');
var _ = require('underscore');
// export var App = function () {
// 	var $ = require('jquery');

// 	console.log('hello');

// 	console.log($('.container'));
// }

export var Literal = {
	sayHello: function (textFromPrintSayHello) {
		return 'I said ' + textFromPrintSayHello;
	},

	printSayHello: function (text) {
		var saying = this.sayHello(text);

		$('#who-said').html(saying);
	}
}

// var a = [
// 	{
// 		name: 'asdf',
// 		id: 1332432342
// 	},
// 	{
// 		name: 'jkjlkj',
// 		id: 244344
// 	}
// ];


// var foundIt;
// a.forEach(function(obj) {
// 	if (obj.id === 244344) {
// 		foundIt = obj;
// 	}
// })

// var foundItUS = _.find(a, function (item) {
// 	return item.id === 244344;
// })

// // foundItUS = { name: asdfasdfasd, id: 244344 }