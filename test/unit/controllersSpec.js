'use strict';

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

  describe('PhoneListCtrl', function(){
    var ctrl;

    beforeEach(module('phonecatApp'));

    beforeEach(inject(function($controller) {
      ctrl = $controller('PhoneListCtrl');
    }));


    it('should create "phones" model with 3 phones', function() {
      expect(ctrl.phones.length).toBe(3);
    });


    it('should set the default value of orderProp model', function() {
      expect(ctrl.orderProp).toBe('age');
    });
  });
});
