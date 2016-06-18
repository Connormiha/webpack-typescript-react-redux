'use strict';

const WEBPACK_CONFIG = require('./webpack.config.js');

module.exports = (options) => {
    const CONFIG = {

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '../',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            './**/*.test.ts',
            './**/*.test.tsx'
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            './**/*.test.ts': ['webpack'],
            './**/*.test.tsx': ['webpack']
        },

        webpackMiddleware: {
            noInfo: true
        },

        webpack: WEBPACK_CONFIG,

        coverageReporter: {
          type: 'text'
        },

        // list of files to exclude
        exclude: [],

        plugins: [
            'karma-coverage',
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-notify-reporter',
            'karma-phantomjs-launcher',
            'karma-spec-reporter',
            'karma-webpack'
        ],

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['spec', 'coverage', 'notify'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        //logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true

    };

    if (options.dev) {
        CONFIG.singleRun = false;
        CONFIG.autoWatch = true;
        CONFIG.browsers = ['Chrome'];
    } else {
        WEBPACK_CONFIG.devtool = null;
        WEBPACK_CONFIG.watch = false;
    }

    return CONFIG;
}
