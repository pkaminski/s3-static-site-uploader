var ConfigRunner = require('./src/ConfigRunner.js');
var path = require('path');

var runner = new ConfigRunner();

exports.setConfig = function(config) {
	runner.setConfig(config);
}

exports.run = function() {
	runner.run();
}