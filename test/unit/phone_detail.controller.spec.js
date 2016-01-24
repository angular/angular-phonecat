'use strict';

describe('PhoneDetailCtrl', function() {

  var $httpBackend, ctrl,
    xyzPhoneData = function() {
      return {
        name: 'phone xyz',
            images: ['image/url1.png', 'image/url2.png']
      }
    };

  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  beforeEach(module('phonecat.phoneDetail'));

  beforeEach(inject(function(_$httpBackend_, $routeParams, $controller) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('phones/xyz.json').respond(xyzPhoneData());

    $routeParams.phoneId = 'xyz';
    ctrl = $controller('PhoneDetailCtrl');
  }));


  it('should fetch phone detail', function() {
    expect(ctrl.phone).toEqual({});
    $httpBackend.flush();

    expect(ctrl.phone).toEqual(xyzPhoneData());
  });
});
