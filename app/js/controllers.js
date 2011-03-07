/* App Controllers */

function PhonesCtrl($route) {
  var self = this;

  $route.when('/phones',
             {template:'partials/phone-list.html',   controller:PhoneListCtrl});
  $route.when('/phones/:phoneId',
             {template:'partials/phone-detail.html', controller:PhoneDetailCtrl});
  $route.otherwise({redirectTo:'/phones'});

  $route.onChange(function(){
    self.params = $route.current.params;
  });

  $route.parent(this);
}

//PhonesCtrl.$inject = ['$route'];


function PhoneListCtrl($xhr) {
  var self = this;

  self.orderProp = 'age';

  $xhr('GET', 'phones/phones.json', function(code, response) {
    self.phones = response;
  });
}

//PhoneListCtrl.$inject = ['$xhr'];


function PhoneDetailCtrl($xhr) {
  var self = this;

  $xhr('GET', 'phones/' + this.params.phoneId + '.json', function(code, response) {
    self.phone = response;
  });
}

//PhoneDetailCtrl.$inject = ['$xhr'];
