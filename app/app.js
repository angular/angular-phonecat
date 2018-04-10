'use strict';

var mainApp = angular.module('brackCrackApp', ['ngRoute', 'firebase']);

mainApp.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    
	$routeProvider
		.when('/home', {
			templateUrl: 'pages/home.html',
			controller: 'MainController'
		})
		.when('/brackets', {
			template: '<bracket userId=123></bracket>'
		})
        .when('/search', {
			templateUrl: 'pages/search.html',
			controller: 'MainController'
		})
        .when('/profile', {
			templateUrl: 'pages/profile.html',
			controller: 'MainController'
		})
        .when('/signIn', {
			templateUrl: 'pages/signIn.html',
			controller: 'MainController'
		})
        .when('/signUp', {
			templateUrl: 'pages/signUp.html',
			controller: 'MainController'
		})
		.otherwise({
			redirectTo: 'home'
		});
});

mainApp.factory("Auth", ["$firebaseAuth", function($firebaseAuth) { 
    return $firebaseAuth(); }
]);

mainApp.controller('MainController', ["$scope", "Auth", function mainController($scope, Auth) {
    $scope.showSuccessAlert = false;
    $scope.successTextAlert = "";
    
    $scope.auth = Auth;
    
    $scope.auth.$onAuthStateChanged(function(firebaseUser) {
      $scope.user = firebaseUser;
    });
    
    $scope.switchBool = function (value) {
        $scope[value] = !$scope[value];
    };
    
    $scope.createAccount = function() {
        firebase.auth().createUserWithEmailAndPassword($scope.newEmail, $scope.newPass).catch(function(error) {
            alert(error.code + ": " + error.message);
            //$scope.showSuccessAlert = true;
            //$scope.successTextAlert = "Success";
        });
    };
    
    $scope.login = function() {
        firebase.auth().signInWithEmailAndPassword($scope.loginEmail, $scope.loginPass).catch(function(error) {
            alert(error.code + ": " + error.message);
        });
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