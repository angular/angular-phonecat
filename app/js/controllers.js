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


function PhoneListCtrl(Phone_) {
  this.orderProp = 'age';
  this.phones = Phone_.query();
}

//PhoneListCtrl.$inject = ['Phone'];


function PhoneDetailCtrl(Phone_) {
  var self = this;

  self.phone = Phone_.get({phoneId: self.params.phoneId}, function(phone) {
    self.mainImageUrl = phone.images[0];
  });

  self.setImage = function(imageUrl) {
    self.mainImageUrl = imageUrl;
  }
}

//PhoneDetailCtrl.$inject = ['Phone'];
