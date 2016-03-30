(function() {
    'use strict';

    angular
        .module('myApp.core')
        .factory('greetingsData', greetingsData);

    greetingsData.$inject = ['$resource'];

    /* @ngInject */
    function greetingsData($resource) {
        var greetings = ['Welcome!', 'What\'s up?'];

        var service = $resource('/api/greetings/:id', {id:'@id'}, {
            update: {method:'PUT',isArray:false}
        });

        return service;
    }
})();
