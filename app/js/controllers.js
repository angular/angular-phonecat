'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone', 'NewPhones',
  function($scope, Phone, NewPhones) {
    Phone.query(function(data) {
      $scope.phones = data.concat(NewPhones.getPhones());
    });
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

phonecatControllers.controller('NewPhoneCtrl', ['$scope', 'NewPhones',
  function($scope, NewPhones) {
    $scope.phone = {"imageUrl": "img/phones/default.jpg"};

    $scope.update = function(phone) {
      NewPhones.addPhone(phone);
    };
  }]);
