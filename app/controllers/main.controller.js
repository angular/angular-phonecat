'use strict';

angular.module('brackCrackApp')
    .controller('MainController', function ($scope, BCAuthService) {
        $scope.$on('authEvent', function (event, user) {
            $scope.setCurrentUser(user, user != null);
        });

        $scope.setCurrentUser = function (user, authenticated) {
            $scope.currentUser = user;
            $scope.loggedIn = authenticated;
        }

        $scope.emailLogin = function () {
            BCAuthService.emailLogin($scope.loginEmail, $scope.loginPass);
        }

        $scope.resetPassword = function () {
            alert('not supported yet');
        }

        $scope.googleLogin = function () {
            BCAuthService.googleLogin();
        }

        $scope.twitterLogin = function () {
            BCAuthService.twitterLogin();
        }

        $scope.facebookLogin = function () {
            BCAuthService.facebookLogin();
        }

        $scope.signOut = function () {
            BCAuthService.signOut();
        }
    });
