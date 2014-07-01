'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    var sliceStart = 0;
    Phone.query(function(data) {
      $scope.phones = data.slice(sliceStart, sliceStart + 3);
    });
    $scope.loadPrev = function() {
      Phone.query(function(data) {
        sliceStart -= 2;
        if (sliceStart < 0) {
          sliceStart = 0;
        }
        $scope.phones = data.slice(sliceStart, sliceStart + 3);
      });
    }
    $scope.loadMore = function() {
      Phone.query(function(data) {
        sliceStart += 2;
        if (sliceStart + 3 > data.length) {
          sliceStart = data.length - 3;
        }
        $scope.phones = data.slice(sliceStart, sliceStart + 3);
      });
    }
    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);
