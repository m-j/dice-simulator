define(['src/modules/diceModule/services/rollSimulator'],
    function (RollSimulator) {
        describe('RollSimulatorSpec', function () {
            it('dependency is loaded', function () {
                expect(RollSimulator).toBeDefined();
            });

            describe('when rolling dices', function () {
                var randomizerMock;
                var rollSimulator;
                var resultsSet;

                beforeEach(function () {
                    randomizerMock = {
                        getRandomInt : jasmine.createSpy('getRandomInt').andReturn(3)
                    }

                    rollSimulator = new RollSimulator(randomizerMock);
                    resultsSet = rollSimulator.roll({
                        sides: 6,
                        count : 2,
                        valid: true
                    })
                });

                it('passes roll data to randomizer', function(){
                    expect(randomizerMock.getRandomInt).toHaveBeenCalledWith(1, 6);
                });

                it('produces results set', function(){
                    expect(resultsSet).toEqual([3,3]);
                });
            });
        });
    }
);