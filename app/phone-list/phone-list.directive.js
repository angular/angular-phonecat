
'use strict';

/* Directives */

angular.
  module('phoneList').
  directive('resultList', [function () {
    var ariaStatus = document.querySelector('.aria-status');
    return {
      restrict: 'A',
      link: function ($scope) {
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
}
]).
  directive('informOrder', [function () {
      var ariaStatusSort = document.querySelector('.aria-status-sort');
      return {
        restrict: 'A',
        link: function ($scope) {
          $scope.$watch('$ctrl.orderProp', function (order) {
            if(order === 'age') {
              ariaStatusSort.innerHTML = 'Items filter by newest'
            } else {
              ariaStatusSort.innerHTML = 'Items filter by alphabetical order'
            }
            
          });
        }
      }
  }
]);