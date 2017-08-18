// 'use strict';

// // Register `phoneDetail` component, along with its associated controller and template
// angular.
//   module('phoneDetail').
//   component('phoneDetail', {
//     templateUrl: 'phone-detail/phone-detail.template.html',
//     controller: ['$routeParams', 'Phone',
//       function PhoneDetailController($routeParams, Phone) {
//         var self = this;
//         self.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
//           self.setImage(phone.images[0]);
//         });

//         self.setImage = function setImage(imageUrl) {
//           self.mainImageUrl = imageUrl;
//         };
//       }
//     ]
//   });

//import phoneDetailTemplate from 'phone-detail.template.html';

/*
declare var angular: angular.IAngularStatic;
import { Phone, PhoneData } from '../core/phone/phone.service';

class PhoneDetailController {
  phone: PhoneData;
  mainImageUrl: string;

  static $inject = ['$routeParams', 'phone'];
  constructor($routeParams: angular.route.IRouteParamsService, phone: Phone) {
    let phoneId = $routeParams['phoneId'];
    phone.get(phoneId).subscribe(data => {
      this.phone = data;
      this.setImage(data.images[0]);
    });
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}

angular.
  module('phoneDetail').
  component('phoneDetail', {
    //templateUrl: 'phone-detail/phone-detail.template.html',
    //template: phoneDetailTemplate,
    template: require('./phone-detail.template.html'),
    controller: PhoneDetailController
  });*/

  declare var angular: angular.IAngularStatic;
  import { downgradeComponent } from '@angular/upgrade/static';  
  import { Component } from '@angular/core';
  
  import { Phone, PhoneData } from '../core/phone/phone.service';
  import { RouteParams } from '../ajs-upgraded-providers';
  
  @Component({
    selector: 'phone-detail',
    templateUrl: './phone-detail.template.html',
  })
  export class PhoneDetailComponent {
    phone: PhoneData;
    mainImageUrl: string;
  
    constructor(routeParams: RouteParams, phone: Phone) {
      phone.get(routeParams['phoneId']).subscribe(phone => {
        this.phone = phone;
        this.setImage(phone.images[0]);
      });
    }
  
    setImage(imageUrl: string) {
      this.mainImageUrl = imageUrl;
    }
  }
  
  angular.module('phoneDetail')
    .directive(
      'phoneDetail',
      downgradeComponent({component: PhoneDetailComponent}) as angular.IDirectiveFactory
    );