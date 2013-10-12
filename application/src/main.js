requirejs.config({
    baseUrl : '/',
    paths : {
        'jquery' : 'lib/jquery/jquery'
    },
    shim : {
        'jquery' : {
            exports : '$'
        }
    }
})

require(['jquery'],function($){

});

