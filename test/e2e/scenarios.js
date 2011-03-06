describe('my app', function() {

  beforeEach(function() {
    browser().navigateTo('../../app/index.html');
  });


  it('should filter the phone list as user types into the search box', function() {
    expect(repeater('.phones li').count()).toBe(5);

    input('query').enter('nexus');
    expect(repeater('.phones li').count()).toBe(1);

    input('query').enter('motorola');
    expect(repeater('.phones li').count()).toBe(3);
  });
});
