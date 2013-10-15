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
                    optimize: 'uglify2',
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
        }
    })

    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-requirejs')

    addServerRunnerTask.register(grunt);

    grunt.registerTask('test-dev', ['karma:dev']);
    grunt.registerTask('test-dist', ['karma:dist']);

    grunt.registerTask('dist', ['requirejs:dist', 'add-server-runner']);
};