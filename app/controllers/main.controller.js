'use strict';

angular.module('brackCrackApp')
    .controller('MainController', ["$scope", "Auth", function ($scope, Auth) {
        $scope.user = Auth.user;
        $scope.loggedIn = Auth.loggedIn;

        $scope.$on('authEvent', function () {
            $scope.user = Auth.user;
            $scope.loggedIn = Auth.loggedIn;
        });

        $scope.switchBool = function (value) {
            $scope[value] = !$scope[value];
        };

        $scope.createAccount = function () {
            Auth.createAccount($scope.newEmail, $scope.newPass);
        };

        $scope.login = function () {
            Auth.emailLogin($scope.loginEmail, $scope.loginPass);
        }

        $scope.resetPassword = function () {
            alert('not supported yet');
        }
    }]);
