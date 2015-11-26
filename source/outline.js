var map = require('map-obj');
var extend = require('xtend');
var directional = require('./directional');
var isColor = require('./is-color');
var isLength = require('./is-length');
var normalize = require('./normalize-color');

var WIDTH = /^(thin|medium|thick)$/;
var STYLE = /^(none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset)$/i;
var KEYWORD = /^(inherit|initial)$/i;

var outline = function(value) {
	var values = normalize(value).split(/\s+/);
	if (values.length === 1 && KEYWORD.test(values[0])) {
		return {
			"outline-width": values[0],
			"outline-style": values[0],
			"outline-color": values[0]
		};
	}
	var result = {};
	values.forEach(function(v) {
		if (isLength(v) || WIDTH.test(v)) {
			result["outline-width"] = v;
		} else if (STYLE.test(v)) {
			result["outline-style"] = v;
		} else if (isColor(v)) {
			result["outline-color"] = v;
		}
	});
	return result;
};

module.exports = exports = outline;
