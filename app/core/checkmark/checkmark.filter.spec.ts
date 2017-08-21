describe('checkmark', function() {

  beforeEach((<any>module)('core'));

  it('should convert boolean values to unicode checkmark or cross',
    inject(function(checkmarkFilter: Function) {
      expect(checkmarkFilter(true)).toBe('\u2713');
      expect(checkmarkFilter(false)).toBe('\u2718');
    })
  );

});
