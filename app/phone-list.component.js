'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phonecatApp').
  component('phoneAndFruitList', { // To get this component to render in the HTML, reference it by kebab-casing this name i.e. <phone-and-fruit-list></phone-and-fruit-list>
    template:
        '<p> This is a phoooone </p>' + 
        '<ul>' +
          '<li ng-repeat="phone in $ctrl.phones">' +
            '<span>{{phone.name}}</span>' +
            '<p>{{phone.snippet}}</p>' +
          '</li>' +
          '<li ng-repeat="fruit in $ctrl.fruits">' +
            '<p style="color: {{fruit.color}}">{{fruit.name}}</p>' +
          '</li>' +
        '</ul>',
    controller: function PhoneListController() {
      this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
        }
      ];

      this.fruits = [
          {name: 'apple'    , color: 'red'    },
          {name: 'banana'   , color: 'yellow' },
          {name: 'cranberry', color: '#AA0000'},
          {name: 'durian'   , color: '#00AA00'}
      ];
    }
  });
