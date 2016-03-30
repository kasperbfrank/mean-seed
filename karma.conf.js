module.exports = function (config) {
    config.set({

        basePath: './',

        files: [
            'public/vendor/angular/angular.js',
            'public/vendor/angular-ui-router/release/angular-ui-router.js',
            'public/vendor/angular-resource/angular-resource.js',
            'public/vendor/angular-mocks/angular-mocks.js',
            'public/vendor/angular-bootstrap/ui-bootstrap-tpls.min.js',
            'public/app/app.module.js',
            'public/app/**/*.module.js',
            'public/app/core/**/*.js',
            'public/app/home/**/*.js',
            'public/app/greeter/**/*.js',
            'public/app/*.js'
        ],

        exclude: [
            'public/app/**/*.scenario.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};
