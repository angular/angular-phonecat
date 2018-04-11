'use strict';

angular.
module('brackCrackApp').
component('navBar', {
    templateUrl: 'components/nav-bar/nav-bar.template.html',
    controller: function NavBarController($scope, Auth) {
        $scope.user = Auth.user;
        $scope.loggedIn = Auth.loggedIn;

        $scope.$on('authEvent', function () {
            $scope.user = Auth.user;
            $scope.loggedIn = Auth.loggedIn;
        });

        $scope.navBarClick = function (tabName) {
            $scope.activeTab = tabName;
        }

        $scope.isActiveTab = function (tabName) {
            return $scope.activeTab == tabName;
        }

        $scope.signOut = function () {
            Auth.signOut();
        }
    }
});
