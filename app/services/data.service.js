'use strict';

angular.module('brackCrackApp')
    .factory('DataService', function ($firebase, FIREBASE_URL) {
        return {
            getBracketList: function (uid) {
                alert('loading list for: ' + uid);
                return $firebase(new Firebase(FIREBASE_URL + '/' + key));
            },
            getFullBracketList: function () {
                return $firebase(new Firebase(FIREBASE_URL));
            }
        }
    });
