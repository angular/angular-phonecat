'use strict';

// Register `phoneDetail` component, along with its associated controller and template
angular.
  module('phoneDetail').
  component('phoneDetail', {
<<<<<<< HEAD
	 template: 'TBD: Detail view for <span>{{$ctrl.phoneId}}</span>',
=======
  template: 'TBD: Detail view for <span>{{$ctrl.phoneId}}</span>',
>>>>>>> master
    controller: ['$routeParams',
      function PhoneDetailController($routeParams) {
        this.phoneId = $routeParams.phoneId;
      }
    ]
  });
