angular.module('starter')
.controller("FirebaseCtrl", function($scope, $state, $firebaseAuth) {

  var fbAuth = $firebaseAuth(fb);

  $scope.fblogin = function() {
    fbAuth.$authWithOAuthPopup("facebook").then(function(authData) {
      $state.go("app.discovery");
      // console.log("Logged in as:", authData.uid);
    }).catch(function(error) {
      console.log("Authentication failed:", error);
    });
  };

  $scope.login = function(username, password) {
    fbAuth.$authWithPassword({
        email: username,
        password: password
    }).then(function(authData) {
        $state.go("app.discovery");
    }).catch(function(error) {
        console.error("ERROR: " + error);
    });
  }

  $scope.register = function(username, password) {
    fbAuth.$createUser({email: username, password: password}).then(function(userData) {
        return fbAuth.$authWithPassword({
            email: username,
            password: password
        });
    }).then(function(authData) {
        $state.go("app.discovery");
    }).catch(function(error) {
        console.error("ERROR: " + error);
    });
  }

});
