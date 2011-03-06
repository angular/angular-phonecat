/* App Controllers */

function PhoneListCtrl($xhr) {
  var self = this;

  self.orderProp = 'age';

  $xhr('GET', 'phones/phones.json', function(code, response) {
    self.phones = response;
  });
}

//PhoneListCtrl.$inject = ['$xhr'];
