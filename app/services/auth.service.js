'use strict';

CHECK THIS OUT

https: //angularfirebase.com/lessons/angular-firebase-authentication-tutorial-oauth/


    angular.module('brackCrackApp')
    .factory('BCAuthService', function ($firebaseAuth, $rootScope, Session) {
        var authService = {};

        authService.broadcastAuthEvent = function () {
            $rootScope.$broadcast('authEvent', Session.user);
        };

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                $rootScope.$broadcast('authEvent', Session.create(user.uid, user));
            } else {
                Session.destroy();
                authService.broadcastAuthEvent();
            }
        });

        authService.createAccount = function (email, password) {
            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
                alert(error.code + ": " + error.message);
            });
        }

        authService.emailLogin = function (email, password) {
            firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
                alert(error.code + ": " + error.message);
            });
        }

        authService.facebookLogin = function () {
            firebase.auth().$signInWithPopup('facebook').catch(function (error) {
                alert(error.code + ": " + error.message);
            });
        };

        authService.googleLogin = function () {
            var provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
            firebase.auth().signInWithPopup(provider).catch(function (error) {
                alert(error.code + ": " + error.message);
            });
        };

        authService.twitterLogin = function () {
            firebase.auth().$signInWithPopup('twitter').catch(function (error) {
                alert(error.code + ": " + error.message);
            });
        };

        authService.signOut = function () {
            firebase.auth().signOut().catch(function (error) {
                alert(error.code + ": " + error.message);
            });
        };

        return authService;
    });
