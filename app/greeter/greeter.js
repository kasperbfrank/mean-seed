(function() {
    'use strict';

    angular
        .module('myApp.greeter')
        .controller('Greeter', Greeter);

    Greeter.$inject = ['greetingsservice'];

    /* @ngInject */
    function Greeter(greetingsservice) {
        var vm = this;
        vm.greeting;

        activate();

        function activate() {
            vm.greeting = greetingsservice.getSecond();
        }
    }
})();
