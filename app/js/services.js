'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
  function($resource){
    var newPhoneList = [];
    var phoneService = $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });

    return {
      get: phoneService.get,
      query: function() {
        var response = phoneService.query();
        response.$promise.then(function(data) {
          for (var i = 0; i < newPhoneList.length; i++) {
            data.push(newPhoneList[i]);
          }
        });
        return response;
      },
      addPhone : function(phone) {
        newPhoneList.push(phone);
      }
    }
  }]);
