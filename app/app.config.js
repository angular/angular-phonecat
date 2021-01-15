'use strict';

angular.
  module('phonecatApp')
  .config(function($stateProvider) {
    var helloState = {
      name: 'phones',
      url: '/phones',
      template: '<phone-list></phone-list>'
    }
  
    var aboutState = {
      name: 'phonesid',
      url: '/phones/:phoneId',
      template: '<phone-detail></phone-detail>'
    }
  
    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);
  });
