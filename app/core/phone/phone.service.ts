'use strict';

interface IPhoneService {
  getPhones(): ng.resource.IResourceClass<any>;
}

class PhoneService implements IPhoneService {
  constructor(public $resource: ng.resource.IResourceService) {
  }

  getPhones(): ng.resource.IResourceClass<any> {
    return this.$resource('phones/:phoneId.json', {}, {
      query: {
        method: 'GET',
        params: {phoneId: 'phones'},
        isArray: true
      }
    });
  }
}

angular.module('core.phone').factory('Phone', ['$resource', ($resource: ng.resource.IResourceService) => new PhoneService($resource).getPhones()]);
