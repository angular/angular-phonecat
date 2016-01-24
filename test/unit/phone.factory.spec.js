'use strict';

describe('Phone', function() {

  // load modules
  beforeEach(module('phonecat.core'));

  // Test service availability
  it('check the existence of Phone factory', inject(function(Phone) {
      expect(Phone).toBeDefined();
    }));
});
