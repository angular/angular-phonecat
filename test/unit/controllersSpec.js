/* jasmine specs for controllers go here */

describe('PhoneListCtrl', function(){

  it('should create "phones" model with 2 phones fetched from xhr', function() {
    var scope = angular.scope(),
        $browser = scope.$service('$browser'),
        ctrl;

    $browser.xhr.expectGET('phones/phones.json').respond([{name: 'Nexus S'},
                                                          {name: 'Motorola DROID'}]);
    ctrl = scope.$new(PhoneListCtrl);

    expect(ctrl.phones).toBeUndefined();
    $browser.xhr.flush();

    expect(ctrl.phones).toBeDefined();
    expect(ctrl.phones).toEqual([{name: 'Nexus S'},
                                 {name: 'Motorola DROID'}]);
  });
});
