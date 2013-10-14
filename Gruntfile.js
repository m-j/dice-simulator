module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        "karma": {
            dev: {
                configFile: 'spec/karma-dev.conf.js'
            },
            dist : {
                configFile: 'spec/karma-dist.conf.js'
            }
        }
    })

    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('test-dev', ['karma:dev']);
    grunt.registerTask('test-dist', ['karma:dist']);



};