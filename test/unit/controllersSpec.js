/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

  describe('PhoneListCtrl', function(){

    it('should create "phones" model with 3 phones', function() {
      var ctrl = new PhoneListCtrl();
      expect(ctrl.phones.length).toBe(3);
    });
  });
});
