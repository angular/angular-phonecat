'use strict';

/* Directives */

var phonecatDirectives = angular.module('phonecatDirectives', []);

phonecatDirectives.directive('resultList', [function () {
  var ariaStatus = document.querySelector('.aria-status');
  return {
    restrict: 'A',
    link: function ($scope, $element, $attrs) {
      $scope.$watch('filtered.length', function (length) {
        if(length === 1) {
          ariaStatus.innerHTML = length + ' item found';
        } else if(length > 1) {
          ariaStatus.innerHTML = length + ' items found';
        } else {
          ariaStatus.innerHTML = 'No items found';
        }
      });
    }
  }
}]);
