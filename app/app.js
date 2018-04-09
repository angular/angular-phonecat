'use strict';

var mainApp = angular.module('brackCrackApp', ['ngRoute', 'firebase']);

mainApp.config(function($routeProvider) {
	$routeProvider
		.when('/home', {
			templateUrl: 'pages/home.html',
			controller: 'MainController'
		})
		.when('/brackets', {
			templateUrl: 'pages/brackets.html',
			controller: 'MainController'
		})
        .when('/search', {
			templateUrl: 'pages/search.html',
			controller: 'MainController'
		})
        .when('/profile', {
			templateUrl: 'pages/profile.html',
			controller: 'MainController'
		})
		.otherwise({
			redirectTo: '/home'
		});
});

mainApp.factory("Auth", ["$firebaseAuth", function($firebaseAuth) { 
    return $firebaseAuth(); }
]);

mainApp.controller('MainController', ["$scope", "Auth", function mainController($scope, Auth) {
    $scope.auth = Auth;
    
    $scope.auth.$onAuthStateChanged(function(firebaseUser) {
      $scope.user = firebaseUser;
    });
    
    $scope.switchBool = function (value) {
        $scope[value] = !$scope[value];
    }
}]);

    /*
    var ref = firebase.database().ref().child("messages");
    $scope.messages = $firebaseArray(ref);
    
    $scope.addMessage = function() {
        $scope.messages.$add({
            text: $scope.newMessageText
        });
    };*/
    
    //var ref = firebase.database().ref().child("data");
    //var syncObject = $firebaseObject(ref);
    //syncObject.$bindTo($scope, "data");