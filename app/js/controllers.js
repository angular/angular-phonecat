/* App Controllers */

function PhoneListCtrl($xhr) {
  var self = this;

  $xhr('GET', 'phones/phones.json', function(code, response) {
    self.phones = response;
  });

  self.orderProp = 'age';
}

//PhoneListCtrl.$inject = ['$xhr'];
