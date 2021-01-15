'use strict';

// Define the `phonecatApp` module
angular.module('phonecatApp', [
  'ngAnimate',
  'ui.router',
  'core',
  'phoneDetail',
  'phoneList'
]);

angular.element(function() {
  angular.bootstrap(document, ['phonecatApp']);
});
