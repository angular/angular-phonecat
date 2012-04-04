'use strict';

/* http://docs.angularjs.org/#!angular.filter */

angular.module('phonecatApp.filters', []).
  filter('checkmark', function() {
    return function(input) {
      return input ? '\u2713' : '\u2718';
    }
  });
