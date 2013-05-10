'use strict';

/* Services */

angular.module('phonecatServices', ['ngResource']).
    factory('Phone', function($resource){
  return $resource('phones/:phoneId.json', {}, {
    query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
  });
}).directive('phoneimages', function() {
    return {
      restrict: 'E',
      scope:{
        phone:'=phone'
      },
      templateUrl: 'partials/phoneimg.html',
      controller: function ($scope) {
        $scope.imgindex = 0

        $scope.setIndex = function(index) {
          $scope.imgindex = index;
          $scope.onimagechange(index)
        }
      }
    };
  });

