define(function () {
    var RollSimulator = function (randomizer) {
        this.roll = function(rollDetails){
            var resultSet = [];

            for(var i = 0; i < rollDetails.count; i++){
                var randomResult = randomizer.getRandomInt(1, rollDetails.sides);
                resultSet.push(randomResult);
            }

            return resultSet;
        };
    };

    RollSimulator.$inject = ['randomizer'];

    return RollSimulator;
});