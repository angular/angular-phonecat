'use strict';
/* App Controllers */

function PhoneListCtrl($scope, Phone) {
  $scope.orderProp = 'age';
  $scope.phones = Phone.query();
}

//PhoneListCtrl.$inject = ['$scope', 'Phone'];


function PhoneDetailCtrl($scope, Phone, $routeParams) {
  $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    $scope.mainImageUrl = phone.images[0];
  });

  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;
  }
}

//PhoneDetailCtrl.$inject = ['$scope', 'Phone', '$routeParams'];
