var addServerRunnerTask = require('./build/addServerRunnerTask.js');

module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        'karma': {
            dev: {
                configFile: 'spec/karma-dev.conf.js'
            },
            dist : {
                configFile: 'spec/karma-dist.conf.js'
            }
        },
        'requirejs' : {
            'dist' : {
                options : {
                    appDir: 'application',
                    dir: 'target/dist',
                    baseUrl: './',
                    optimize: 'none',
                    generateSourceMaps: true,
                    preserveLicenseComments: false,
                    useSourceUrl: true,
                    mainConfigFile: 'application/src/main.js',
                    modules: [
                        {
                            name: 'src/main'
                        }
                    ]
                }
            }
        },
        "jshint" : {
            src: ['application/src/**/*.js'],
            options : {

                jshintrc : 'build/jshintrc.json'
            }
        }
    })

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-requirejs');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    addServerRunnerTask.register(grunt);

    grunt.registerTask('test-dev', ['karma:dev']);
    grunt.registerTask('test-dist', ['karma:dist']);

    grunt.registerTask('dist', ['jshint', 'test-dist', 'requirejs:dist', 'add-server-runner']);
};