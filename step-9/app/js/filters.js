/* http://docs.angularjs.org/#!angular.filter */

angular.filter('checkmark', function(input) {
  return input ? '\u2713' : '\u2718';
});
