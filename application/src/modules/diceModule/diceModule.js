define(
    [
        'angular'
        , './controllers/rollDescriptionController'
        , './controllers/rollResultsController'
        , './services/rollSimulator'
        , './services/rollParser'
        , './factories/randomizer'
        , 'angular-route'
    ]
    , function(
            angular
            , RollDescriptionController
            , RollResultsController
            , RollSimulator
            , RollParser
            , randomizer
        )
    {
        var diceModule = angular.module('diceModule', ['ngRoute']);
        diceModule.controller('rollDescriptionController', RollDescriptionController);
        diceModule.controller('rollResultsController', RollResultsController);
        diceModule.service('rollSimulator', RollSimulator);
        diceModule.service('rollParser', RollParser);

        diceModule.factory('randomizer', randomizer);

        diceModule.config(['$routeProvider', function($routeProvider){
            $routeProvider
                .when('/roll', {
                    templateUrl : 'views/roll-description.html',
                    controller: 'rollDescriptionController'
                })
                .when('/roll/:description', {
                    templateUrl : 'views/roll-results.html',
                    controller : 'rollResultsController'
                })
                .otherwise({
                    redirectTo: '/roll'
                });
        }])
    }
);