(function() {
    'use strict';

    angular
        .module('myApp.core')
        .factory('greetingsservice', greetingsservice);

    /* @ngInject */
    function greetingsservice() {
        var greetings = ['Welcome!', 'What\'s up?'];

        var service = {
            getFirst: getFirst,
            getSecond: getSecond
        };

        return service;

        function getFirst() {
            return greetings[0];
        }

        function getSecond() {
            return greetings[1];
        }
    }
})();
