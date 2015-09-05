/*
 * Re-implementation of the Angular Phonecat Protractor scenarios.js
 * to make use of State Objects, an extension of Page Objects
 * in which a state machine drives test generation.
 *
 * Copyright (c) Arie van Deursen, Delft University of Technology, 2015.
 *
 * Like the original scenarios.js file, these tests are distributed under the MIT License.
 */


'use strict';

var PhoneList = (function () {
    var query = element(by.model('query')),
        phoneList = element.all(by.repeater('phone in phones')),
        phoneNameColumn = element.all(by.repeater('phone in phones').column('phone.name')),
        phoneLinks = element.all(by.css('.phones li a'));

    function sortBy(property) {
        return element(by.model('orderProp')).element(by.css('option[value="' + property + '"]')).click();
    }

    return {
        get: function () {
            return browser.get('app/index.html');
        },
        selfCheck: function () {
            expect(browser.getLocationAbsUrl()).toBe('/phones');
        },
        search: function (text) {
            return query.clear().then(function () {
                query.sendKeys(text);
            });
        },
        count: function () {
            return phoneList.count();
        },
        getNames: function () {
            return phoneNameColumn.map(function(elm) {
                return elm.getText();
            });
        },
        byAge: function () {
            return sortBy('age');
        },
        byName: function () {
            return sortBy('name');
        },
        firstPhone: function () {
            return phoneLinks.first().click().then(function() {
                return Nexus;
            });
        }
    };
}());


var Nexus = (function () {
    return {
        selfCheck: function () {
            expect(browser.getLocationAbsUrl()).toBe('/phones/nexus-s');
        },
        get: function () {
            browser.get('app/index.html#/phones/nexus-s');
        },
        name: function () {
            return element(by.binding('phone.name')).getText();
        },
        currentImage: function () {
            return element(by.css('img.phone.active')).getAttribute('src');
        },
        thumb: function (index) {
            return element(by.css('.phone-thumbs li:nth-child(' + index + ') img')).click();
        },
        backToList: function () {
            return browser.driver.navigate().back();
        }
    };
}());


describe('PhoneCat App', function() {

    it('should redirect index.html to index.html#/phones', function() {
        PhoneList.get();
        PhoneList.selfCheck();
    });


    describe('Phone list view', function() {

        it('should start with 20 phones', function() {
            expect(PhoneList.count()).toBe(20);
        });

        it('should find a single nexus', function (done) {
            PhoneList.search('nexus').then(function () {
                expect(PhoneList.count()).toBe(1);
                done();
            });
        });

        it('should find multiple motorolas', function (done) {
            PhoneList.search('motorola').then(function () {
                expect(PhoneList.count()).toBe(8);
                done();
            });
        });

        it('should filter the phone list as a user types into the search box', function(done) {
            PhoneList.search('nexus').then(function () {
                PhoneList.search('motorola').then(function () {
                    expect(PhoneList.count()).toBe(8);
                    done();
                });
            });
        });

        it('should distinguish two tablets', function() {
            PhoneList.search('tablet').then(function () {
                expect(PhoneList.getNames()).toEqual([
                    "Motorola XOOM\u2122 with Wi-Fi",
                    "MOTOROLA XOOM\u2122"
                ]);
            });
        });

        it('should sort by name', function () {
            PhoneList.search('tablet')
                .then(PhoneList.byName)
                .then(function () {
                    expect(PhoneList.getNames()).toEqual([
                        "MOTOROLA XOOM\u2122",
                        "Motorola XOOM\u2122 with Wi-Fi"
                    ]);
                });
        });

        it('should sort by age', function () {
            PhoneList.search('tablet')
                .then(PhoneList.byAge)
                .then(function () {
                   expect(PhoneList.getNames()).toEqual([
                        "Motorola XOOM\u2122 with Wi-Fi",
                        "MOTOROLA XOOM\u2122"
                    ]);
                });
        });

        it('should render phone specific links and return', function() {
            PhoneList.search('nexus')
                .then(PhoneList.firstPhone)
                .then(Nexus.selfCheck)
                .then(Nexus.backToList)
                .then(PhoneList.selfCheck);
        });
    });


    describe('Phone detail view', function() {

        it('should start at a nexus', function () {
            Nexus.get();
            Nexus.selfCheck();            
        });

        it('should display nexus-s page', function() {
            expect(Nexus.name()).toBe('Nexus S');
        });

        it('should display the first phone image as the main phone image', function() {
            expect(Nexus.currentImage()).toMatch(/img\/phones\/nexus-s.0.jpg/);
        });

        it('should swap main image if a thumbnail image is clicked on', function() {
            Nexus.thumb(3).then(function () {
                expect(Nexus.currentImage()).toMatch(/nexus-s.2.jpg/);
                Nexus.thumb(2).then(function () {
                    expect(Nexus.currentImage()).toMatch(/nexus-s.1.jpg/);
                });
            });
        });
    });
});
