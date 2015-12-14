'use strict';

angular.module('phonecat.list')
  .controller('PhoneListCtrl', PhoneListCtrl);

PhoneListCtrl.$inject = ['Phone'];

function PhoneListCtrl(Phone) {
  this.phones = Phone.query();
  this.orderProp = 'age';
}
