'use strict';

angular.
module('brackCrackApp').
component('navBar', {
    templateUrl: 'components/nav-bar/nav-bar.template.html',
    controller: function NavBarController($scope) {
        $scope.navBarClick = function (tabName) {
            $scope.activeTab = tabName;
        }

        $scope.isActiveTab = function (tabName) {
            return $scope.activeTab == tabName;
        }
    }
});
