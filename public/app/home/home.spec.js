'use strict';

describe('home section', function () {

    beforeEach(function () {
        module('myApp');
        module('myApp.home');
    });

    describe('Home Controller', function () {

        var $controller;
        var greetingsData;

        beforeEach(inject(function (_$controller_, _greetingsData_) {
            $controller = _$controller_;
            greetingsData = _greetingsData_;
        }));

        it('should provide simple access to its data', function () {
            var vm = $controller('Home');

            expect(vm).toBeDefined();
        });
    });
});
