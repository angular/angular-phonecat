import * as angular from 'angular';
import { IPhoneService, IPhoneResource } from '../core/phone/phone.service';

export interface IPhoneDetailController {
  mainImageUrl: string;
  setImage: (imageUrl: string) => void;
}

export class PhoneDetailController implements IPhoneDetailController {
  public mainImageUrl: string;
  public phone: IPhoneService;

  constructor(public $routeParams: ng.route.IRouteParamsService, public Phone: IPhoneResource) {
    Phone.get({phoneId: $routeParams.phoneId}, (phone: IPhoneService) => {
          this.phone = phone;
          this.setImage(phone.images[0]);
        });
  }
  public setImage(imageUrl: string): void {
    this.mainImageUrl = imageUrl;
  }
}

// Register `phoneDetail` component, along with its associated controller and template
angular.module('phoneDetail')
  .component('phoneDetail', {
    templateUrl: 'phone-detail/phone-detail.template.html',
    controller: ['$routeParams', 'Phone', ($routeParams: ng.route.IRouteParamsService, Phone: IPhoneResource) => new PhoneDetailController($routeParams, Phone)]
  });