'use strict';

angular.module('brackCrackApp')
    .controller('ProfileController', ["$scope", "Auth", function ($scope, Auth) {
        $scope.user = Auth.user;
        $scope.loggedIn = Auth.loggedIn;

        $scope.$on('authEvent', function () {
            $scope.user = Auth.user;
            $scope.loggedIn = Auth.loggedIn;
        });
    }]);
