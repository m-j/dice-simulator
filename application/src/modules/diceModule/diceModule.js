define(
    [
        'angular'
        , 'angular-route'
    ]
    , function(
            angular
        )
    {
        var diceModule = angular.module('diceModule', ['ngRoute']);

        diceModule.config(function($routeProvider){
            $routeProvider
                .when('/', {
                    templateUrl : 'views/main.html',
                    controller : function(){}
                })
                .when('/roll', {
                    templateUrl : 'views/training.html',
                    controller: 'p90xTrainingController'
                })
                .when('/roll/:description', {
                    templateUrl : 'views/exercise.html',
                    controller : 'p90xExerciseController'
                });
        })
    }
);