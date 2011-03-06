'use strict';

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

  describe('PhoneListCtrl', function(){
    var scope, ctrl;

    beforeEach(module('phonecatApp'));

    beforeEach(inject(function($controller) {
      scope = {};
      ctrl = $controller('PhoneListCtrl', {$scope:scope});
    }));


    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('age');
    });
  });
});
