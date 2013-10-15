var fs = require('fs');
var path = require('path');

exports.register = function(grunt){
    grunt.registerTask('add-server-runner', 'Adds script to run server', function(){
        var scriptContent = 'cd `dirname $0`; ws -p 8001';
        var scriptPath = 'target/dist/run.sh';


        console.log('dupa')
        var absoulteScriptPath = path.resolve(scriptPath);

        grunt.file.write(absoulteScriptPath, scriptContent, {encoding: 'utf-8'})

        console.log(absoulteScriptPath);

        fs.chmodSync(absoulteScriptPath, '777');
    });
}