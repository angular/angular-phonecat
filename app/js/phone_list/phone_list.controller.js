'use strict';

angular.module('phonecat.phoneList').controller('PhoneListCtrl',
  ['Phone', function (Phone) {
    this.phones = Phone.query();
    this.orderProp = 'age';
  }]);
