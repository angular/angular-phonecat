describe('phoneDetail', function() {

  // Load the module that contains the `phoneDetail` component before each test
  beforeEach((<any>module)('phoneDetail'));

  // Test the controller
  describe('PhoneDetailController', function() {
    var $httpBackend: any, ctrl: any;
    var xyzPhoneData = {
      name: 'phone xyz',
      images: ['image/url1.png', 'image/url2.png']
    };

    beforeEach(inject(function($componentController: any, _$httpBackend_: any, $routeParams: any) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('phones/xyz.json').respond(xyzPhoneData);

      $routeParams.phoneId = 'xyz';

      ctrl = $componentController('phoneDetail');
    }));

    it('should fetch the phone details', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.phone).toEqual({});

      $httpBackend.flush();
      expect(ctrl.phone).toEqual(xyzPhoneData);
    });

  });

});
