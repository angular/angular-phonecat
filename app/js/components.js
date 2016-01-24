'use strict';

/* Components */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.component('phoneList', {
  controller: 'PhoneListCtrl',
  templateUrl: 'partials/phone-list.html'
}).controller('PhoneListCtrl', function() {
  this.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.',
     'age': 1},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.',
     'age': 2},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.',
     'age': 3}
  ];
  
  this.orderProp = 'age';
});
