'use strict';

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

  describe('PhoneListCtrl', function(){

    beforeEach(module('phonecatApp'));

    it('should create "phones" model with 3 phones', inject(function($controller) {
      var ctrl = $controller('PhoneListCtrl');

      expect(ctrl.phones.length).toBe(3);
    }));

  });
});
