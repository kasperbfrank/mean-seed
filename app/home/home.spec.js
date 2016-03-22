describe('home section', function () {

    // beforeEach(module('myApp.home'));

    beforeEach(function () {
        module('myApp');
        module('myApp.home');
    });

    describe('Home Controller', function () {

        var $controller;
        var greetingsservice;

        beforeEach(inject(function (_$controller_, _greetingsservice_) {
            // The injector unwraps the underscores (_) from around the parameter names when matching
            $controller = _$controller_;
            greetingsservice = _greetingsservice_;
        }));

        it('should provide simple access to its data', function () {
            var scope = {};
            var vm = $controller('Home', {$scope: scope, greetingsservice: greetingsservice});

            expect(vm).toBeDefined();
            expect(vm.name).toBeDefined();
            expect(vm.greeting).toBeDefined();

            expect(vm.name).toBe('Kasper Bruus Frank');
            expect(vm.greeting).toBe('Welcome!');
        });
    });
});
