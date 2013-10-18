var tests = [];

for (var file in window.__karma__.files) {
//    console.log('File added for RequireJS: ' + file);
    if (/base\/spec.*Spec\.js$/.test(file)) {
//        console.log('Adding file to tests ' + file);
        tests.push(file);
    }
}

require.config({
    paths : {
        'jquery' : 'lib/jquery/jquery'
        ,'angular' : 'lib/angular/angular'
        ,'angular-route' : 'lib/angular-route/angular-route'
    },
    shim : {
        'jquery' : {
            exports : '$'
        },
        'angular' : {
            exports : 'angular',
            deps : ['jquery']
        },
        'angular-route' : {
            deps : ['angular']
        }
    },
    baseUrl : 'base/application',
    deps: tests,
    callback: window.__karma__.start
});