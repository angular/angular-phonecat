'use strict';

angular.module('phonecatApp', [
    'ngRoute',
    'phonecat.core',
    'phonecat.detail',
    'phonecat.list'
  ]).config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/phones', {
          templateUrl: 'js/phone_list/phone_list.html',
          controller: 'PhoneListCtrl',
          controllerAs: 'vm'
        }).
        when('/phones/:phoneId', {
          templateUrl: 'js/phone_detail/phone_detail.html',
          controller: 'PhoneDetailCtrl',
          controllerAs: 'vm'
        }).
        otherwise({
          redirectTo: '/phones'
        });
    }]);
