'use strict';

interface IPhoneDetailController {
  mainImageUrl: string;
  setImage: (imageUrl: string) => void;
}

class PhoneDetailController implements IPhoneDetailController {
  public mainImageUrl: string;
  public phone: any;

  constructor(public $routeParams: ng.route.IRouteParamsService, public Phone: any) {
    Phone.get({phoneId: $routeParams.phoneId}, (phone: any) => {
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
    controller: ['$routeParams', 'Phone', ($routeParams, Phone) => new PhoneDetailController($routeParams, Phone)]
  });