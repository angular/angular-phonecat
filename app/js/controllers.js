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


function PhoneListCtrl(Phone_) {
  this.orderProp = 'age';
  this.phones = Phone_.query();
}

//PhoneListCtrl.$inject = ['Phone'];


function PhoneDetailCtrl(Phone_) {
  this.phone = Phone_.get({phoneId:this.params.phoneId});
}

//PhoneDetailCtrl.$inject = ['Phone'];
