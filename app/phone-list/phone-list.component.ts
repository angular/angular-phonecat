import * as angular from 'angular';
import { IPhoneService, IPhoneResource } from '../core/phone/phone.service';

export interface IPhoneListController {
  phones: Array<IPhoneService>;
  orderProp: string;
}

export class PhoneListController implements IPhoneListController {
  public phones: Array<IPhoneService>;
  public orderProp: string;

  constructor(public Phone: IPhoneResource) {
    this.phones = Phone.query();
    this.orderProp = 'age';
  }
} 

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['Phone', (Phone: IPhoneResource) => new PhoneListController(Phone)]
  });