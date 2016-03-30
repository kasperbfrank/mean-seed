(function () {
    angular.module('myApp.greeter')
        .config(['$stateProvider', function config($stateProvider) {
            $stateProvider.state('greeter', {
                url: '/greeter',
                views: {
                    "main": {
                        controller: 'Greeter as greeter',
                        templateUrl: 'app/greeter/greeter.html'
                    }
                }
            });
        }])
})();
