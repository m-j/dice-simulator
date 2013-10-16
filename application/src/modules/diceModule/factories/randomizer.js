define(function () {
    var randomizer = function () {
        return {
            getRandomInt : function(min, max) {
                return Math.floor(Math.random() * (max - min + 1) + min);
            }
        };
    };

    randomizer.$inject = [];

    return randomizer;
});