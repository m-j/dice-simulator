define(function () {
    var RollDescriptionController = function ($scope, $location) {
        $scope.roll = function(){
            $location.path('/roll/' + $scope.rollDescription);
        }
    }

    RollDescriptionController.$inject = ['$scope', '$location'];

    return RollDescriptionController;
});