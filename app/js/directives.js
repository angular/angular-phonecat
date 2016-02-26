'use strict';

/* Directives */

var phonecatDirectives = angular.module('phonecatDirectives', []);

  phonecatDirectives.directive('resultList', [function(){
    return {
      restrict: 'A',
      link: function($scope, $element, $attrs) {
        $scope.$watch('query.length', function(length){
          if($scope.numItems !== undefined){
            if(length < $scope.numItems){
              // if we're removing items
              console.log('removing items: '+length);
              $scope.relevant = 'removals';
            }
            else if(length > $scope.numItems){
              console.log('adding items: '+length);
              $scope.relevant = 'additions';
            }
          }
          $scope.numItems = length;
        });
      }
    }
  }]);
