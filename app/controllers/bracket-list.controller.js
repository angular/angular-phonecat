'use strict';

angular.module('brackCrackApp')
    .controller('BracketListController', ["$scope", "$filter", function ($scope, $filter) {
        $scope.bracketList = [];

        $scope.actionClicked = false;

        var x;
        for (x = 0; x < 200; x++) {
            $scope.bracketList.push({
                id: x,
                name: 'Brack' + x,
                desc: x + 'Test Bracket',
                category: 'Comedy',
                format: '16x16',
                createdBy: 'Derrick Hiestand',
                createdOn: new Date('2018-4-10'),
                public: false
            });
        }

        $scope.openBracket = function (row) {
            if (!$scope.actionClicked) {
                alert('open bracket: ' + row.id);
            }
            $scope.actionClicked = false;
        }

        $scope.shareBracket = function (bracketId) {
            $scope.actionClicked = true;
            alert('share bracket: ' + bracketId);
        }

        $scope.printBracket = function (bracketId) {
            $scope.actionClicked = true;
            alert('print bracket: ' + bracketId);
        }

        $scope.deleteBracket = function (bracketId) {
            $scope.actionClicked = true;
            alert('delete bracket: ' + bracketId);
        }
}]);
