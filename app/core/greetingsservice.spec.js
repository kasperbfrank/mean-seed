describe('greetingsservice', function() {
    var greetingsservice;

    beforeEach(function () {
          module('myApp.core')
    });

    beforeEach(inject(function(_greetingsservice_) {
        greetingsservice = _greetingsservice_;
    }));

    it('should provide first greeting', function () {
        // SETUP
        var greeting;

        // EXECUTE
        greeting = greetingsservice.getFirst();

        // TEST RESULTS
        expect(greeting).toEqual('Welcome!');
    });

    it('should provide second greeting', function () {
        // SETUP
        var greeting;

        // EXECUTE
        greeting = greetingsservice.getSecond();

        // TEST RESULTS
        expect(greeting).toEqual('What\'s up?');
    });
});
