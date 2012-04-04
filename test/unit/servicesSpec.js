'use strict';

/* jasmine specs for services go here */

describe('service', function() {
  beforeEach(module('phonecatApp.services'));


  describe('Phone', function() {
    it('should provide the phone resource service', inject(function(Phone) {
      expect(Phone).toBeDefined();
    }));
  });
});
