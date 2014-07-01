'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);

phonecatServices.service('NewPhones', function() {
    var newPhoneList = [];

    return {
      addPhone : function(phone) {
        newPhoneList.push(phone);
      },
      getPhones : function() {
        return angular.copy(newPhoneList);
      }
    };
  });
