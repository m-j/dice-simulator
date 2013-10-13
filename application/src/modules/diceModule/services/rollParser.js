define(['./validationMessages'],function (validationMessages) {
    var RollParser = function () {
        function errorResult(messageKey){
            return {
                valid : false,
                message : validationMessages[messageKey]
            }
        }

        this.parse = function(rollDescription){
            var rollRegex = /([0-9]+)d([0-9]+)/;
            var match = rollDescription.match(rollRegex);

            if(!match){
                return errorResult('WRONG_FORMAT')
            }

            var rollsCount = parseInt(match[1], 10);
            var sidesCount = parseInt(match[2], 10);

            if(rollsCount < 1){
                return errorResult('NOT_ENOUGH_ROLLS');
            }

            if(sidesCount < 1){
                return errorResult('NOT_ENOUGH_SIDES');
            }

            return {
                valid : true,
                sides : sidesCount,
                rolls: rollsCount
            }
        }
    }

    RollParser.$inject = [];

    return RollParser;
});