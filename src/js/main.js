var alertstars = require("./lib/alertstars");
var _ = require("underscore");
var $ = require("jquery");

window.onload = function() {

	var messages = [
		"welcome",
		"this is a new page",
		"do you like it?",
		"blah"
	];
	_.each(messages, function(message) {
		$("body").append($("<p>").text(message));
	});
};