var util = require('util');
var test = require('tape');
var expand = require('../');

var margin = require('./fixtures/margin');
var padding = require('./fixtures/padding');
var background = require('./fixtures/background');
var font = require('./fixtures/font');
var border = require('./fixtures/border');

var testProperty = function(name, fixture) {
	test(name, function(t) {
		Object.keys(fixture).forEach(function(key) {
			var result = expand(name, key);
			var message = util.format('value: %s', key);

			t.deepEqual(result, fixture[key], message);
		});

		t.end();
	});
};

testProperty('margin', margin);
testProperty('padding', padding);
testProperty('background', background);
testProperty('font', font);
testProperty('border', border);

test('non-shorthand property', function(t) {
	var result = expand('color', '#00f');

	t.notOk(result);
	t.end();
});
