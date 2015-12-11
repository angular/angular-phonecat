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
          template: '<phone-list></phone-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        otherwise({
          redirectTo: '/phones'
        });
    }]);
