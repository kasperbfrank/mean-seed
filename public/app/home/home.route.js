(function () {
    angular.module('myApp.home')
        .config(['$stateProvider', function config($stateProvider) {
            $stateProvider.state('home', {
                url: '/',
                views: {
                    "main": {
                        controller: 'Home as home',
                        templateUrl: 'app/home/home.html'
                    }
                }
            });
        }])
})();
