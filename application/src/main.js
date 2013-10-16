requirejs.config({
    baseUrl : '/',
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
    }
});

require(['jquery'
    , 'angular'
    , 'src/modules/diceModule/diceModule'
],function($, angular){
    angular.bootstrap(document, ['diceModule']);
});

