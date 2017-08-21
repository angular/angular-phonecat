'use strict';

interface IPhoneListController {
  phones: any;
  orderProp: string;
}

class PhoneListController implements IPhoneListController {
  public phones: any;
  public orderProp: string;

  constructor(public Phone: any) {
    this.phones = Phone.query();
    this.orderProp = 'age';
  }
} 

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['Phone', (Phone) => new PhoneListController(Phone)]
  });