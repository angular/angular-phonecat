'use strict';

describe('PhoneDetailCtrl', function() {

  var $httpBackend, ctrl,
      xyzPhoneData = function() {
        return {
          name: 'phone xyz',
              images: ['image/url1.png', 'image/url2.png']
        }
      };

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('phonecat.detail'));

  beforeEach(inject(function(_$httpBackend_, $routeParams, $controller) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('phones/xyz.json').respond(xyzPhoneData());

    $routeParams.phoneId = 'xyz';
    ctrl = $controller('PhoneDetailCtrl');
  }));

  it('should fetch phone detail', function() {
    expect(ctrl.phone).toEqualData({});
    $httpBackend.flush();

    expect(ctrl.phone).toEqualData(xyzPhoneData());
  });

});
