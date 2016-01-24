'use strict';

/* Components */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.component('phoneList', {
  controller: 'PhoneListCtrl',
  templateUrl: 'partials/phone-list.html'
}).controller('PhoneListCtrl', ['$http', function ($http) {
  var ctrl = this;

  $http.get('phones/phones.json').success(function(data) {
    ctrl.phones = data;
  });

  ctrl.orderProp = 'age';
}]);
