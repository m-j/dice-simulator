var tests = [];

for (var file in window.__karma__.files) {
    console.log('File added for RequireJS: ' + file);
    if (/base\/spec.*Spec\.js$/.test(file)) {
        console.log('Adding file to tests ' + file);
        tests.push(file);
    }
}

require.config({
    paths : {
        'jquery' : 'lib/jquery/jquery'
    },
    shim : {
        'jquery' : {
            exports : '$'
        }
    },
    baseUrl : 'base/application',
    deps: tests,
    callback: window.__karma__.start
});