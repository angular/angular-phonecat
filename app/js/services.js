'use strict';

/* http://docs.angularjs.org/#!angular.service */


angular.module('phonecatApp.services', []).
  factory('Phone', function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  });
