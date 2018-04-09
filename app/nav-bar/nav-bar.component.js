'use strict';

angular.
  module('brackCrackApp').
  component('navBar', {
    templateUrl: 'nav-bar/nav-bar.template.html',
    controller: function NavBarController($scope) {
        firebase.auth().onAuthStateChanged(function(user) {
          if (user) {
              $scope.user = user;
              $scope.loggedIn = true;
          } else {
              $scope.loggedIn = false;
          }
        });
        
        $scope.navBarClick = function(tabName) {
            $scope.activeTab = tabName;
        }
        
        $scope.isActiveTab = function(tabName) {
            return $scope.activeTab == tabName;
        }
        
        $scope.signIn = function() {
            var provider = new firebase.auth.GoogleAuthProvider();
            provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
            firebase.auth().useDeviceLanguage();
            provider.setCustomParameters({
                'login_hint': 'user@example.com'
            });

            firebase.auth().signInWithPopup(provider).then(function(result) {
                $scope.user = result.user;
                $scope.token = result.credential.accessToken;
                $scope.loggedIn = true;
            }).catch(function(error) {
                $scope.showErrorAlert = true;
                $scope.errorTextAlert = error.code + ": " + error.message;
                
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;
            });
        }
        
        $scope.signOut = function() {
            firebase.auth().signOut().then(function() {
                $scope.showSuccessAlert = true;
                $scope.successTextAlert = 'Successfully logged out';
                $scope.user = {};
                $scope.token = '';
                $scope.loggedIn = false;
                
            }).catch(function(error) {
                $scope.showErrorAlert = true;
                $scope.errorTextAlert = error.message;
            });
        }
    }
  });