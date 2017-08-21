'use strict';

class Config {
  constructor($locationProvider: angular.ILocationProvider, $routeProvider: angular.route.IRouteProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.
      when('/phones', {
        template: '<phone-list></phone-list>'
      }).
      when('/phones/:phoneId', {
        template: '<phone-detail></phone-detail>'
      })
      .otherwise({redirectTo: '/phones'});
  }
}

angular.
  module('phonecatApp').
  config(['$locationProvider' ,'$routeProvider', ($locationProvider: ng.ILocationProvider, $routeProvider: ng.route.IRouteProvider) => new Config($locationProvider, $routeProvider)]);
