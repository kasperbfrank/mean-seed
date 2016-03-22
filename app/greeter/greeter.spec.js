describe('Greeter', function() {

    beforeEach(function () {
          // code that executes before every test
          module('myApp');
          module('myApp.greeter');
    });

    describe('Greeter Controller', function() {

        var $controller;
        var greetingsservice;

        beforeEach(inject(function (_$controller_, _greetingsservice_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $controller = _$controller_;
            greetingsservice = _greetingsservice_;
        }));

        it('should provide random greeting', function () {
            // SETUP
            var scope = {};
            var vm = $controller('Greeter', {$scope: scope, greetingsservice: greetingsservice});

            // EXECUTE

            // TEST RESULTS
            expect(vm).toBeDefined();
            expect(vm.greeting).toBeDefined();

            expect(vm.greeting).toEqual('What\'s up?');
        });


    });
});
