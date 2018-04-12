'use strict';

angular.module('brackCrackApp')
    .factory('Auth', ['$firebaseAuth', '$rootScope', function ($firebaseAuth, $rootScope) {
        var auth = {};

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                auth.user = user;
                auth.loggedIn = true;
                auth.broadcastAuthEvent();
            } else {
                auth.user = {};
                auth.loggedIn = false;
                auth.broadcastAuthEvent();
            }
        });

        auth.broadcastAuthEvent = function () {
            alert('broadcasting');
            $rootScope.$broadcast('authEvent');
        };

        auth.createAccount = function (email, password) {
            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
                alert(error.code + ": " + error.message);
            });
        }

        auth.emailLogin = function (email, password) {
            firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
                alert(error.code + ": " + error.message);
            });
        }

        auth.facebookLogin = function () {
            firebase.auth().$signInWithPopup('facebook').catch(function (error) {
                alert(error.code + ": " + error.message);
            });
        };

        auth.googleLogin = function () {
            var provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
            firebase.auth().signInWithPopup(provider).catch(function (error) {
                alert(error.code + ": " + error.message);
            });
        };

        auth.twitterLogin = function () {
            firebase.auth().$signInWithPopup('twitter').catch(function (error) {
                alert(error.code + ": " + error.message);
            });
        };

        auth.signOut = function () {
            firebase.auth().signOut().catch(function (error) {
                alert(error.code + ": " + error.message);
            });
        };

        return auth;
    }]);
