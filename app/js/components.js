'use strict';

/* Components */

var phonecatComponents = angular.module('phonecatComponents', []);

phonecatComponents.component('phoneList', {
  controller: 'PhoneListCtrl',
  templateUrl: 'partials/phone-list.html'
}).controller('PhoneListCtrl', ['Phone', function (Phone) {
  this.phones = Phone.query();
  this.orderProp = 'age';
}]);


phonecatComponents.component('phoneDetail', {
  controller: 'PhoneDetailCtrl',
  templateUrl: 'partials/phone-detail.html'
}).controller('PhoneDetailCtrl', ['$routeParams', 'Phone',
  function($routeParams, Phone) {
    var ctrl = this;
    ctrl.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      ctrl.mainImageUrl = phone.images[0];
    });

    ctrl.setImage = function(imageUrl) {
      ctrl.mainImageUrl = imageUrl;
    };
  }]);
