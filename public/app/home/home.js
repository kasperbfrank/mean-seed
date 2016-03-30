(function() {
    'use strict';

    angular
        .module('myApp.home')
        .controller('Home', Home);

    Home.$inject = ['greetingsData'];

    /* @ngInject */
    function Home(greetingsData) {
        var vm = this;
        vm.greetings;
        vm.name = 'Kasper Bruus Frank';

        activate();

        function activate() {
            vm.greetings = greetingsData.query();
        }
    }
})();
