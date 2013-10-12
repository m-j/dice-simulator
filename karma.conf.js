module.exports = function(config) {
    config.set({
        basePath: './',
        frameworks: ['jasmine', 'requirejs'],
        singleRun : false,
        files: [
//            {pattern: 'app/js/lib/requirejs/require.js', included: true},
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
        //...
    });
};