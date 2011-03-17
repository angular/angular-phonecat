/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });


  describe('PhoneListCtrl', function(){
    var scope, $browser, ctrl;

    beforeEach(function() {
      scope = angular.scope();
      $browser = scope.$service('$browser');

      $browser.xhr.expectGET('phones/phones.json').respond([{name: 'Nexus S'},
                                                            {name: 'Motorola DROID'}]);
      ctrl = scope.$new(PhoneListCtrl);
    });


    it('should create "phones" model with 2 phones fetched from xhr', function() {
      expect(ctrl.phones).toEqual([]);
      $browser.xhr.flush();

      expect(ctrl.phones).toEqualData([{name: 'Nexus S'},
                                       {name: 'Motorola DROID'}]);
    });


    it('should set the default value of orderProp model', function() {
      expect(ctrl.orderProp).toBe('age');
    });
  });


  describe('PhoneDetailCtrl', function(){
    var scope, $browser, ctrl;

    beforeEach(function() {
      scope = angular.scope();
      $browser = scope.$service('$browser');
    });

    beforeEach(function() {
      scope = angular.scope();
      $browser = scope.$service('$browser');
    });


    it('should fetch phone detail', function(){
      scope.params = {phoneId:'xyz'};
      $browser.xhr.expectGET('phones/xyz.json').respond({name:'phone xyz'});
      ctrl = scope.$new(PhoneDetailCtrl);

      expect(ctrl.phone).toEqualData({});
      $browser.xhr.flush();

      expect(ctrl.phone).toEqualData({name:'phone xyz'});
    });
  });
});
