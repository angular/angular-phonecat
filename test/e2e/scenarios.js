/* jasmine-like end2end tests go here */
describe('PhoneCat App', function() {

  describe('Phone list view', function() {

    beforeEach(function() {
      browser().navigateTo('../../app/index.html');
    });


    it('should filter the phone list as user types into the search box', function() {
      expect(repeater('.phones li').count()).toBe(20);

      input('query').enter('nexus');
      expect(repeater('.phones li').count()).toBe(1);

      input('query').enter('motorola');
      expect(repeater('.phones li').count()).toBe(8);
    });


    it('should be possible to control phone order via the drop down select box', function() {
      input('query').enter('tablet'); //let's narrow the dataset to make the test assertions shorter

      expect(repeater('.phones li', 'Phone List').column('a')).
          toEqual(["Motorola XOOM\u2122 with Wi-Fi",
                   "MOTOROLA XOOM\u2122"]);

      select('orderProp').option('alphabetical');

      expect(repeater('.phones li', 'Phone List').column('a')).
          toEqual(["MOTOROLA XOOM\u2122",
                   "Motorola XOOM\u2122 with Wi-Fi"]);
    });


    it('should render phone specific links', function() {
      input('query').enter('nexus');
      element('.phones li a').click();
      expect(browser().location().hash()).toBe('/phones/nexus-s');
    });
  });
});
