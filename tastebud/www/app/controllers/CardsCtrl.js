angular.module('starter')
.controller('CardsCtrl', function($scope, $ionicHistory, $firebase, $firebaseArray, GeoFactory, TDCardDelegate) {

  $ionicHistory.clearHistory();

  $scope.images = [];

  var fbAuth = fb.getAuth();
  if(fbAuth) {
    var imageRef = fb.child("tasties/");
    // var userReference = fb.child("users/" + fbAuth.uid);

    $scope.cards = [];

    var syncArray = $firebaseArray(imageRef.child("images"));
    syncArray.$loaded(function(){
      $scope.images = syncArray;

      var locations = {
        "current": [37.7838175, -122.40924629999998],
      };

      var center = locations["current"];

      // Query radius
      var radiusInKm = 1.6;

      // Create a new GeoQuery instance
      var geoQuery = geoFire.query({
        center: center,
        radius: radiusInKm
      });

      geoQuery.on("key_entered", function(key, location, distance) {
        var keyL = $scope.images.$keyAt(parseInt(key));
        var memo = $scope.images.$getRecord(keyL);
        memo.miles = (distance / 1.6).toFixed(2);
        $scope.cards.push(memo);
      });

    });
  } else {
      $state.go("app.auth");
  }

  // Array.prototype.slice.call($scope.images, 0);

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
  };
  $scope.cardRemove = function() {
    $scope.cards.splice($scope.cards.length-1, 1);
  };

  // $scope.addCard = function() {
  //   var newCard = $scope.images[Math.floor(Math.random() * $scope.images.length)];
  //   newCard.id = Math.random();
  //   $scope.cards.push(angular.extend({}, newCard));
  // }
});
