'use strict';

/* Components */

var phonecatApp = angular.module('phonecatApp', []);

phonecatApp.component('phoneList', {
  controller: 'PhoneListCtrl',
  templateUrl: 'partials/phone-list.html'
}).controller('PhoneListCtrl', function() {
  this.phones = [
    {'name': 'Nexus S',
     'snippet': 'Fast just got faster with Nexus S.'},
    {'name': 'Motorola XOOM™ with Wi-Fi',
     'snippet': 'The Next, Next Generation tablet.'},
    {'name': 'MOTOROLA XOOM™',
     'snippet': 'The Next, Next Generation tablet.'}
  ];
});
