/* jasmine specs for controllers go here */

describe('PhoneListCtrl', function(){

  it('should create "phones" model with 5 phones', function() {
    var ctrl = new PhoneListCtrl();
    expect(ctrl.phones).toBeDefined();
    expect(ctrl.phones.length).toBe(5);
  });
});
