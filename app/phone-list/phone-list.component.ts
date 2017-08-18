// 'use strict';

// // Register `phoneList` component, along with its associated controller and template
// angular.
//   module('phoneList').
//   component('phoneList', {
//     templateUrl: 'phone-list/phone-list.template.html',
//     controller: ['Phone',
//       function PhoneListController(Phone) {
//         this.phones = Phone.query();
//         this.orderProp = 'age';
//       }
//     ]
//   });

declare var angular: angular.IAngularStatic;
import { Phone, PhoneData } from '../core/phone/phone.service';

class PhoneListController {
  phones: PhoneData[];
  orderProp: string;

  static $inject = ['phone'];
  constructor(phone: Phone) {
    phone.query().subscribe(phones => {
      this.phones = phones;
    });
    this.orderProp = 'age';
  }

}

angular.
  module('phoneList').
  component('phoneList', {
    // templateUrl: 'phone-list/phone-list.template.html',
    template: require('./phone-list.template.html'),
    controller: PhoneListController
  });