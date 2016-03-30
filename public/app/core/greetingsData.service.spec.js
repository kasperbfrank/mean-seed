'use strict';

describe('greetingsData service', function() {
    var greetingsData,
        httpBackend;

    beforeEach(module('myApp.core'));

    beforeEach(inject(function(_greetingsData_, $httpBackend) {
        greetingsData = _greetingsData_;
        httpBackend = $httpBackend;
    }));

    it('should return all greetings', function () {
        // SETUP
        var greetings;
        httpBackend.whenGET('/api/greetings').respond([
            { text: 'Welcome!', _id: '56fbe635a637da7497a97a28' },
            { text: 'What\'s up?', _id: '56fbe69ca637da7497a97a29' }
        ]);

        // EXECUTE
        greetings = greetingsData.query();
        httpBackend.flush();

        // TEST RESULTS
        expect(greetings[0].text).toEqual('Welcome!');
        expect(greetings[1].text).toEqual('What\'s up?');
    });
});
