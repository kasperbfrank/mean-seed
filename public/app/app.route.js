(function () {
    angular.module('myApp')
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function appConfig($stateProvider, $urlRouterProvider, $locationProvider) {
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
            $urlRouterProvider.otherwise('/');
        }])
})();
