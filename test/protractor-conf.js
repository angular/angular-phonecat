exports.config = {
  allScriptsTimeout: 11000,

  onPrepare: function () {
    // Disable animations so e2e tests run more quickly and do not randomly fail due to animations
    var disableNgAnimate = function () {
      angular.module('disableNgAnimate', []).run(['$animate', function ($animate) {
        $animate.enabled(false);
      }]);
    };

    browser.addMockModule('disableNgAnimate', disableNgAnimate);
  },


  specs: [
    'e2e/*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  chromeOnly: true,

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
