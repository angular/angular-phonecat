'use strict';

/* Components */

var phonecatComponents = angular.module('phonecatComponents', []);

phonecatComponents.component('phoneList', {
  controller: 'PhoneListCtrl',
  templateUrl: 'partials/phone-list.html'
}).controller('PhoneListCtrl', ['$http', function ($http) {
  var ctrl = this;

  $http.get('phones/phones.json').success(function(data) {
    ctrl.phones = data;
  });

  ctrl.orderProp = 'age';
}]);


phonecatComponents.component('phoneDetail', {
  controller: 'PhoneDetailCtrl',
  templateUrl: 'partials/phone-detail.html'
}).controller('PhoneDetailCtrl', ['$routeParams', '$http',
  function($routeParams, $http) {
    var ctrl = this;
    $http.get('phones/' + $routeParams.phoneId + '.json').success(function(data) {
      ctrl.phone = data;
      ctrl.mainImageUrl = data.images[0];
    });

    ctrl.setImage = function(imageUrl) {
      ctrl.mainImageUrl = imageUrl;
    };
  }]);
