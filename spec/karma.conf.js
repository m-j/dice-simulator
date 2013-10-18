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
        'karma-requirejs',
        'karma-phantomjs-launcher',
        'karma-coverage'
    ],
    autoWatch : true,
    reporters: ['progress', 'coverage'],
    preprocessors: {
        // source files, that you wanna generate coverage for
        // do not include tests or libraries
        // (these files will be instrumented by Istanbul)
        '**/application/src/**/*.js': ['coverage']
    },

    // optionally, configure the reporter
    coverageReporter: {
        type : 'html',
        dir : 'target/coverage/'
    }
}

var extendKarmaConf = function(extensionConf){
    return function(config){
        var extendedConf = _.assign({}, commonConf, extensionConf);

//        console.log('Karma conf is:')
//        console.log(extendedConf);

        config.set(extendedConf);
    }
}

exports.extendKarmaConf = extendKarmaConf;

