'use strict';

angular.module('phonecat.list')
  .controller('PhoneListCtrl', PhoneListCtrl);

PhoneListCtrl.$inject = ['Phone'];

function PhoneListCtrl(Phone) {
  var vm = this;
  vm.phones = Phone.query();
  vm.orderProp = 'age';
}
