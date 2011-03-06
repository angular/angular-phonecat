describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });


  it('should filter the phone list as user types into the search box', function() {
    expect(repeater('.phones li').count()).toBe(32);

    input('query').enter('nexus');
    expect(repeater('.phones li').count()).toBe(2);

    input('query').enter('motorola');
    expect(repeater('.phones li').count()).toBe(9);
  });
});
