'use strict';

angular.
  module('core').
  filter('checkmark', function() {
    return function(input: any) {
      return input ? '\u2713' : '\u2718';
    };
  });
