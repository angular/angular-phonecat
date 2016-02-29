'use strict';

/* Directives */

var phonecatDirectives = angular.module('phonecatDirectives', []);

  phonecatDirectives.directive('resultList', [function(){
    return {
      restrict: 'A',
      link: function($scope, $element, $attrs) {
        var ariaStatus = document.querySelector('.aria-status');
        $scope.$watch('filtered.length', function(length){
          if($scope.numItems !== undefined){
            ariaStatus.innerHTML = length + ' item(s) found';
          }
        });
      }
    }
  }]);
