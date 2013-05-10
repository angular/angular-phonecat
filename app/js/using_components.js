'use strict';

/* App Module */
angular.module('using_components', ['phonecatServices'])

function UsingComponentsCtrl($scope, Phone) {
  $scope.phone1 = Phone.get({phoneId: 'nexus-s'});
  $scope.phone2 = Phone.get({phoneId: 'motorola-xoom'});

  $scope.changedimage1 = function(idx){
    alert('changed phone1 pic = '+idx)
  }
 
  $scope.changedimage2 = function(idx){
    alert('changed phone2 pic = '+idx)
  }
}