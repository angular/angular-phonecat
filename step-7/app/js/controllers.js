/* App Controllers */

function PhoneCatCtrl($route) {
  var self = this;

  $route.when('/phones',
              {template: 'partials/phone-list.html',   controller: PhoneListCtrl});
  $route.when('/phones/:phoneId',
              {template: 'partials/phone-detail.html', controller: PhoneDetailCtrl});
  $route.otherwise({redirectTo: '/phones'});

  $route.onChange(function(){
    self.params = $route.current.params;
  });

  $route.parent(this);
}

//PhoneCatCtrl.$inject = ['$route'];


function PhoneListCtrl($xhr) {
  var self = this;

  $xhr('GET', 'phones/phones.json', function(code, response) {
    self.phones = response;
  });

  self.orderProp = 'age';
}

//PhoneListCtrl.$inject = ['$xhr'];


function PhoneDetailCtrl() {}
