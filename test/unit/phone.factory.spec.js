'use strict';

describe('phoneFactory', function() {

  beforeEach(module('phonecat.core'));

  it('check the existence of Phone factory', inject(function(Phone) {
    expect(Phone).toBeDefined();
  }));
  
});
