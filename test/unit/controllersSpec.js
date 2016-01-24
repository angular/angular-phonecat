'use strict';

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

  beforeEach(module('phonecatApp'));

  describe('PhoneListCtrl', function(){
    var ctrl, $httpBackend;

    beforeEach(inject(function(_$httpBackend_, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/phones.json').
          respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

      ctrl = $controller('PhoneListCtrl');
    }));


    it('should create "phones" model with 2 phones fetched from xhr', function() {
      expect(ctrl.phones).toBeUndefined();
      $httpBackend.flush();

      expect(ctrl.phones).toEqual([{name: 'Nexus S'},
                                   {name: 'Motorola DROID'}]);
    });


    it('should set the default value of orderProp model', function() {
      expect(ctrl.orderProp).toBe('age');
    });
  });


  describe('PhoneDetailCtrl', function(){
    var $httpBackend, ctrl;

    beforeEach(inject(function(_$httpBackend_, $routeParams, $controller) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/xyz.json').respond({name:'phone xyz'});

      $routeParams.phoneId = 'xyz';
      ctrl = $controller('PhoneDetailCtrl');
    }));


    it('should fetch phone detail', function() {
      expect(ctrl.phone).toBeUndefined();
      $httpBackend.flush();

      expect(ctrl.phone).toEqual({name:'phone xyz'});
    });
  });
});
