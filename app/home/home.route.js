(function () {
    angular.module('myApp.home')
        .config(['$stateProvider', function config($stateProvider) {
            $stateProvider.state('home', {
                url: '/home',
                views: {
                    "main": {
                        controller: 'Home as vm',
                        templateUrl: 'home/home.html'
                    }
                }
            });
        }])
})();
