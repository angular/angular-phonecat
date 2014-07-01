'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    var sliceTill = 3;
    Phone.query(function(data) {
      $scope.phones = data.slice(0, sliceTill);
    });
    $scope.loadMore = function() {
      Phone.query(function(data) {
        sliceTill += 3;
        if (sliceTill > data.length) {
          sliceTill = data.length;
        }
        $scope.phones = data.slice(0, sliceTill);
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
