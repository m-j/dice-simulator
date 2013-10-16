define(function () {
    var RollResultsController = function ($scope, $routeParams, rollSimulator, rollParser) {
        var rollDetails = rollParser.parse($routeParams.description);

        $scope.rollResults = rollSimulator.roll(rollDetails);
    };

    RollResultsController.$inject = ['$scope', '$routeParams', 'rollSimulator', 'rollParser'];

    return RollResultsController;
});