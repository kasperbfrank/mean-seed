(function() {
    'use strict';

    angular
        .module('myApp.greeter')
        .controller('Greeter', Greeter);

    Greeter.$inject = ['greetingsData'];

    /* @ngInject */
    function Greeter(greetingsData) {
        var vm = this;
        vm.greeting;

        activate();

        function activate() {
            vm.greeting = greetingsData.get({id:'56fbe69ca637da7497a97a29'});
        }
    }
})();
