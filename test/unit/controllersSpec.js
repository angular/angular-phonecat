/* jasmine specs for controllers go here */

describe('controllers', function(){
  var scope, $browser, ctrl;

  beforeEach(function(){
    scope = angular.scope();
    $browser = scope.$service('$browser');
  });


  describe('PhonesCtrl', function(){

    it('should redirect to /phones if no hash', function(){
      $browser.setUrl('http://myserver.com/');
      ctrl = scope.$new(PhonesCtrl);
      $browser.xhr.expectGET('phones/phones.json').respond([]);
      ctrl.$root.$eval();
      expect($browser.getUrl()).toEqual('http://myserver.com/#/phones');
    });


    it('should respond to /phones', function(){
      $browser.setUrl('http://myserver.com/#/phones');
      ctrl = scope.$new(PhonesCtrl);
      $browser.xhr.expectGET('phones/phones.json').respond([]);
      ctrl.$root.$eval();
      expect(scope.$service('$route').current.controller).toEqual(PhoneListCtrl);
    });

    it('should respond to /phones/abc', function(){
      $browser.setUrl('http://myserver.com/#/phones/abc');
      $browser.xhr.expectGET('phones/abc.json').respond([]);
      ctrl = scope.$new(PhonesCtrl);
      ctrl.$root.$eval();
      expect(scope.$service('$route').current.controller).toEqual(PhoneDetailCtrl);
      expect(ctrl.params.phoneId).toEqual('abc');
    });
  });


  describe('PhoneListCtrl', function(){
    beforeEach(function() {
      $browser.xhr.expectGET('phones/phones.json').respond([{name: 'Nexus S'},
                                                            {name: 'Motorola DROID'}]);
      ctrl = scope.$new(PhoneListCtrl);

      expect(ctrl.phones).toBeUndefined();
      $browser.xhr.flush();
    });


    it('should create phones model with 2 phones fetched from xhr', function() {
      expect(ctrl.phones).toBeDefined();
      expect(ctrl.phones).toEqual([{name: 'Nexus S'},
                                   {name: 'Motorola DROID'}]);
    });


    it('should set the default value of orderProp model', function() {
      expect(ctrl.orderProp).toBe('age');
    });
  });


  describe('PhoneDetailCtrl', function(){

    it('should fetch phone detail', function(){
      scope.params = {phoneId:'xyz'};
      $browser.xhr.expectGET('phones/xyz.json').respond({name:'phone xyz'});
      ctrl = scope.$new(PhoneDetailCtrl);
      expect(ctrl.phone).toBeUndefined();
      $browser.xhr.flush();
      expect(ctrl.phone).toEqual({name:'phone xyz'});
    });

  });

});
