'use strict';

var brackCrackApp = angular.module('brackCrackApp', ['ngRoute', 'firebase', 'smart-table']);

brackCrackApp.directive('fullscreenDialog', function () {
    return {
        controller: 'MainController',
        restrict: 'E',
        replace: true,
        transclude: true,
        template: '<div class="dialog-container"><ng-transclude></ng-transclude></div>'
    }
});

brackCrackApp.constant('FIREBASE_URL', 'https://brackcrackapp.firebaseio.com');

brackCrackApp.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider
        .when('/home', {
            templateUrl: 'views/home.view.html',
            controller: 'HomeController'
        })
        .when('/brackets', {
            templateUrl: 'views/bracket-list.view.html',
            controller: 'BracketListController'
        })
        .when('/search', {
            templateUrl: 'views/search.view.html',
            controller: 'SearchController'
        })
        .when('/profile', {
            templateUrl: 'views/profile.view.html',
            controller: 'ProfileController'
        })
        .when('/signIn', {
            templateUrl: 'views/sign-in.view.html',
            controller: 'SignInController'
        })
        .when('/signUp', {
            templateUrl: 'views/sign-up.view.html',
            controller: 'SignUpController'
        })
        .when('/loading', {
            templateUrl: 'views/loading.view.html',
            controller: 'MainController'
        })
        .otherwise({
            redirectTo: '/home'
        });
});
