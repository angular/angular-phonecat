'use strict';

describe('PhoneListCtrl', function(){
  var ctrl, $httpBackend;

  beforeEach(function(){
    this.addMatchers({
      toEqualData: function(expected) {
        return angular.equals(this.actual, expected);
      }
    });
  });

  beforeEach(module('phonecat.list'));

  beforeEach(inject(function(_$httpBackend_, $controller) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('phones/phones.json').
        respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

    ctrl = $controller('PhoneListCtrl');
  }));

  it('should create "phones" model with 2 phones fetched from xhr', function() {
    expect(ctrl.phones).toEqualData([]);
    $httpBackend.flush();

    expect(ctrl.phones).toEqualData(
        [{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
  });

  it('should set the default value of orderProp model', function() {
    expect(ctrl.orderProp).toBe('age');
  });
});
