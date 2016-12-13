//jshint strict: false
exports.config = {

  allScriptsTimeout: 11000,

  specs: [
    '*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },
  
  chromeOnly: true,
  directConnect: true,
  
  plugins: [{
    chromeA11YDevTools: {
      treatWarningsAsFailures: true
    },
    package: 'protractor-accessibility-plugin'
  }]

};
