describe('PhoneCat Application', function() {
  it('should redirect `index.html` to `index.html#!/phones', function() {
    cy.visit("/index.html")
    cy.hash().should("eq", "#!/phones")
  })

  describe('View: Phone list', function() {
    beforeEach(function() {
      cy.visit('/index.html#!/phones')
      cy.ng("model", "$ctrl.query").as("q")
    })

    it('should filter the phone list as a user types into the search box', function() {
      cy.get("ul.phones li").should("have.length", 20)
      cy.get("@q").type("nexus")
      cy.get("ul.phones li").should("have.length", 1)
      cy.get("@q").clear().type("motorola")
      cy.get("ul.phones li").should("have.length", 8)
    })

    it('should be possible to control phone order via the drop-down menu', function() {
      function getNames($names) {
        return $names.map(function(index, el){
          return Cypress.$(el).text()
        }).get()
      }

      cy.get("@q").type("tablet")
      cy.ng("binding", "phone.name")
        .should(function($names){
          expect(getNames($names)).to.deep.eq [
            "Motorola XOOM™ with Wi-Fi",
            "MOTOROLA XOOM™"
          ]
        })
      cy.ng("model", "$ctrl.orderProp").select("name")
      cy.ng("binding", "phone.name")
        .should(function($names){
          expect(getNames($names)).to.deep.eq [
            "MOTOROLA XOOM™",
            "Motorola XOOM™ with Wi-Fi"
          ]
        })
    })

    it('should render phone specific links', function() {
      cy.get("@q").type("nexus")
      cy.ng("repeater", "phone in $ctrl.phones")
        .should("have.length", 1) // block until the animation is complete
        .find("a").first().click()
      cy.hash().should("match", /phones\/nexus-s/)
    })
  })

  describe('View: Phone detail', function() {
    beforeEach(function() {
      cy.visit('/index.html#!/phones/nexus-s')
    })

    it('should display `nexus-s` page', function() {
      cy.contains("h1", "Nexus S")
    })

    it('should display the first phone image as the main phone image', function() {
      cy.get("img.phone.selected")
        .should("have.attr", "src")
        .and("match", /img\/phones\/nexus-s.0.jpg/)
    })

    it('should swap the main image when clicking on a thumbnail imag', function() {
      cy.get(".phone-thumbs li:nth-child(3) img").click()
      cy.get("img.phone.selected").should("have.attr", "src").and("match", /img\/phones\/nexus-s.2.jpg/)
      cy.get(".phone-thumbs li:nth-child(1) img").click()
      cy.get("img.phone.selected").should("have.attr", "src").and("match", /img\/phones\/nexus-s.0.jpg/)
    })
  })
})
