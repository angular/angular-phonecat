'use strict';

angular.module('phonecat.detail')
  .controller('PhoneDetailCtrl', PhoneDetailCtrl);


PhoneDetailCtrl.$inject = ['$routeParams', 'Phone'];

function PhoneDetailCtrl($routeParams, Phone) {
  var phoneDetail = this;

  phoneDetail.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
    phoneDetail.mainImageUrl = phone.images[0];
  });

  phoneDetail.setImage = function(imageUrl) {
    phoneDetail.mainImageUrl = imageUrl;
  };
}
