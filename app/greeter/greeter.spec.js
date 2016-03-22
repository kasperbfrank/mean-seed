describe('Greeter', function() {

    beforeEach(function () {
          module('myApp');
          module('myApp.greeter');
    });

    describe('Greeter Controller', function() {

        var $controller;
        var greetingsservice;

        beforeEach(inject(function (_$controller_, _greetingsservice_) {
            $controller = _$controller_;
            greetingsservice = _greetingsservice_;
        }));

        it('should provide random greeting', function () {
            // SETUP
            var vm = $controller('Greeter');

            // EXECUTE

            // TEST RESULTS
            expect(vm).toBeDefined();
            expect(vm.greeting).toBeDefined();

            expect(vm.greeting).toEqual('What\'s up?');
        });


    });
});
