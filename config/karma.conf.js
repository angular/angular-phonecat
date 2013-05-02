basePath = '../';

files = [
  JASMINE,
  JASMINE_ADAPTER,
  'app/lib/angular/1.0.2/angular.js',
  'app/lib/angular/1.0.2/angular-*.js',
  'test/lib/angular/1.0.2/angular-mocks.js',
  'app/js/**/*.js',
  'test/unit/**/*.js'
];

autoWatch = true;

browsers = ['Chrome'];

junitReporter = {
  outputFile: 'test_out/unit.xml',
  suite: 'unit'
};
