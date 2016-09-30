describe('PhoneCat Application', function() {
  it('should redirect `index.html` to `index.html#!/phones', function() {
    cy
      .visit("/index.html")
      .hash().should("eq", "#!/phones")
  });

  describe('View: Phone list', function() {
    beforeEach(function() {
      cy
        .visit('/index.html#!/phones')
        .ng("model", "$ctrl.query").as("q")
    });

    it('should filter the phone list as a user types into the search box', function() {
      cy
        .get("ul.phones li").should("have.length", 20)
        .get("@q").type("nexus")
        .get("ul.phones li").should("have.length", 1)
        .get("@q").clear().type("motorola")
        .get("ul.phones li").should("have.length", 8)
    });

    it('should be possible to control phone order via the drop-down menu', function() {
      function getNames($names) {
        return $names.map(function(index, el){
          return Cypress.$(el).text()
        }).get()
      }

      cy
        .get("@q").type("tablet")
        .ng("binding", "phone.name")
        .should(function($names){
          expect(getNames($names)).to.deep.eq [
            "Motorola XOOM™ with Wi-Fi",
            "MOTOROLA XOOM™"
          ]
        })
        .ng("model", "$ctrl.orderProp").select("name")
        .ng("binding", "phone.name")
        .should(function($names){
          expect(getNames($names)).to.deep.eq [
            "MOTOROLA XOOM™",
            "Motorola XOOM™ with Wi-Fi"
          ]
        })
    });

    it('should render phone specific links', function() {
      cy
        .get("@q").type("nexus")
        .ng("repeater", "phone in $ctrl.phones")
          .should("have.length", 1) // block until the animation is complete
          .find("a").first().click()
        .hash().should("match", /phones\/nexus-s/)
    });
  });

  describe('View: Phone detail', function() {
    beforeEach(function() {
      cy.visit('/index.html#!/phones/nexus-s');
    });

    it('should display `nexus-s` page', function() {
      cy.contains("h1", "Nexus S")
    });

    it('should display the first phone image as the main phone image', function() {
      cy.get("img.phone.selected").should("have.attr", "src").and("match", /img\/phones\/nexus-s.0.jpg/)
    });

    it('should swap the main image when clicking on a thumbnail imag', function() {
      cy
        .get(".phone-thumbs li:nth-child(3) img").click()
        .get("img.phone.selected").should("have.attr", "src").and("match", /img\/phones\/nexus-s.2.jpg/)
        .get(".phone-thumbs li:nth-child(1) img").click()
        .get("img.phone.selected").should("have.attr", "src").and("match", /img\/phones\/nexus-s.0.jpg/)
    });
  });
});
