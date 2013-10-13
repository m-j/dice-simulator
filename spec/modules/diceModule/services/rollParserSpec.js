define(
    ['src/modules/diceModule/services/rollParser'
        , 'src/modules/diceModule/services/validationMessages'],
    function(RollParser, validationMessages){
        describe('RollParser', function(){
            it('dependency is loaded', function(){
                expect(RollParser).toBeDefined();
            });
        });

        describe('when trying to parse roll description', function(){
            var rollParser;

            beforeEach(function(){
                rollParser = new RollParser();
            });

            describe('when parsing invalid roll description', function(){
                it('returns WRONG_FORMAT', function(){
                    var validationResult = rollParser.parse('blabla');
                    expect(validationResult).toEqual({
                        valid : false,
                        message : validationMessages.WRONG_FORMAT
                    })
                })
            })

            describe('when parsing roll description with 0 rolls', function(){
                it('returns NOT_ENOUGH_ROLLS', function(){
                    var validationResult = rollParser.parse('0d10');
                    expect(validationResult).toEqual({
                        valid : false,
                        message : validationMessages.NOT_ENOUGH_ROLLS
                    })
                })
            })

            describe('when parsing roll description with 0 sides', function(){
                it('returns NOT_ENOUGH_SIDES', function(){
                    var validationResult = rollParser.parse('2d0');
                    expect(validationResult).toEqual({
                        valid : false,
                        message : validationMessages.NOT_ENOUGH_SIDES
                    })
                })
            })

            describe('when providing valid roll description', function(){
                it('returns roll details', function(){
                    var validationResult = rollParser.parse('2d6');
                    expect(validationResult).toEqual({
                        valid : true,
                        sides: 6,
                        count: 2
                    })
                })
            })
        })
    }
);