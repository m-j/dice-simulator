var _ = require('lodash');

var commonConf = {
    basePath: '../',
    frameworks: ['jasmine', 'requirejs'],
    singleRun : false,
    files: [
        {pattern: 'spec/test-main.js', included: true},
        {pattern: 'application/**/*.js', included: false},
        {pattern: 'spec/**/*.js', included: false}
    ],
    exclude: [
        'application/src/main.js'
    ],
    browsers : ['Chrome'],
    plugins: [
        'karma-jasmine',
        'karma-chrome-launcher',
        'karma-requirejs'
    ],
    autoWatch : true
}

var extendKarmaConf = function(extensionConf){
    return function(config){
        var extendedConf = _.assign({}, commonConf, extensionConf);

        console.log(extensionConf)
        console.log(extendedConf);

        config.set(extendedConf);
    }
}

exports.extendKarmaConf = extendKarmaConf;

