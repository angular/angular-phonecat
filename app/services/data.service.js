'use strict';

angular.module('brackCrackApp')
    .factory('DataService', function ($firebase, FIREBASE_URL) {
        return {
            getBracketList: function (uid) {
                return $firebase(new Firebase(FIREBASE_URL + '/' + uid));
            },
            getFullBracketList: function () {
                return $firebase(new Firebase(FIREBASE_URL));
            }
        }
    });
