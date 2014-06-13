var nopt = require('nopt');
var util = require('util');

var init = function (options) {

    var knownOptions = {
        'hello': [ String ]
    };

    var shorthand = {
        'w': [ '--hello', 'world' ]
    };

    var parsed = nopt(knownOptions, shorthand, process.argv, 2);

    console.log("init()", {
        'parsed': util.inspect(parsed)
    });

    console.log('init()', {
        // 'arguments': arguments,
        'options': options
    });
};

module.exports = init;
