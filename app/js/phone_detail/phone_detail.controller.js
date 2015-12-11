'use strict';

angular.module('phonecat.detail')
  .controller('PhoneDetailCtrl', PhonecatDetailCtrl);

PhonecatDetailCtrl.$inject = ['$routeParams', 'Phone'];

function PhonecatDetailCtrl($routeParams, Phone) {
  var vm = this;

  vm.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    vm.mainImageUrl = phone.images[0];
  });

  vm.setImage = function(imageUrl) {
    vm.mainImageUrl = imageUrl;
  };
}
