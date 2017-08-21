'use strict';

angular.
  module('core').
  filter('checkmark', function() {
    return function(input: boolean): string {
      return input ? '\u2713' : '\u2718';
    };
  });
