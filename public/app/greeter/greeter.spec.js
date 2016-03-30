'use strict';

describe('Greeter', function() {

    beforeEach(function () {
          module('myApp');
          module('myApp.greeter');
    });

    describe('Greeter Controller', function() {

        var $controller;
        var greetingsData;

        beforeEach(inject(function (_$controller_, _greetingsData_) {
            $controller = _$controller_;
            greetingsData = _greetingsData_;
        }));

        it('should provide random greeting', function () {
            // SETUP
            var vm = $controller('Greeter');

            // EXECUTE

            // TEST RESULTS
            expect(vm).toBeDefined();
        });


    });
});
