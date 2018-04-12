'use strict';

angular.module('brackCrackApp')
    .controller('SignInController', ["$scope", "Auth", function ($scope, Auth) {
        $scope.user = Auth.user;
        $scope.loggedIn = Auth.loggedIn;

        $scope.$on('authEvent', function () {
            $scope.user = Auth.user;
            $scope.loggedIn = Auth.loggedIn;
        });

        $scope.emailLogin = function () {
            Auth.emailLogin($scope.loginEmail, $scope.loginPass);
        }

        $scope.resetPassword = function () {
            alert('not supported yet');
        }

        $scope.googleLogin = function () {
            Auth.googleLogin();
        }

        $scope.twitterLogin = function () {
            Auth.twitterLogin();
        }

        $scope.facebookLogin = function () {
            Auth.facebookLogin();
        }
    }]);
