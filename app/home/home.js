(function() {
    'use strict';

    angular
        .module('myApp.home')
        .controller('Home', Home);

    Home.$inject = ['greetingsservice'];

    /* @ngInject */
    function Home(greetingsservice) {
        var vm = this;
        vm.greeting;
        vm.name = 'Kasper Bruus Frank';

        activate();

        function activate() {
            vm.greeting = greetingsservice.getFirst();
        }
    }
})();
