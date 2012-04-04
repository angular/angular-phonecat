/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('phonecatApp.services'));


  describe('PhoneListCtrl', function(){
    var scope, $httpBackend, ctrl;

    beforeEach(inject(function($rootScope, _$httpBackend_, $controller) {
      scope = $rootScope.$new();
      $httpBackend = _$httpBackend_;

      $httpBackend.expectGET('phones/phones.json').respond([{name: 'Nexus S'},
                                                            {name: 'Motorola DROID'}]);
      ctrl = $controller(PhoneListCtrl, {$scope: scope});
    }));


    it('should create "phones" model with 2 phones fetched from xhr', function() {
      expect(scope.phones).toEqual([]);
      $httpBackend.flush();

      expect(scope.phones).toEqualData([{name: 'Nexus S'},
                                       {name: 'Motorola DROID'}]);
    });


    it('should set the default value of orderProp model', function() {
      expect(scope.orderProp).toBe('age');
    });
  });


  describe('PhoneDetailCtrl', function(){
    var scope, $httpBackend, $controller, ctrl;

    beforeEach(inject(function($rootScope, _$httpBackend_, _$controller_) {
      scope = $rootScope.$new();
      $httpBackend = _$httpBackend_;
      $controller = _$controller_;
    }));


    it('should fetch phone detail', inject(function($routeParams){
      $routeParams.phoneId = 'xyz';
      $httpBackend.expectGET('phones/xyz.json').respond({name:'phone xyz', images: ['http://foo']});
      ctrl = $controller(PhoneDetailCtrl, {$scope: scope});

      expect(scope.phone).toEqualData({});
      $httpBackend.flush();

      expect(scope.phone).toEqualData({name:'phone xyz', images: ['http://foo']});
    }));
  });
});
