angular.module('starter')
  .controller('DetailsCtrl', function($scope, $ionicHistory, $firebaseArray, GeoFactory) {

    $ionicHistory.clearHistory();

    $scope.dish = {};
    $scope.images = [];

    var fbAuth = fb.getAuth();

    if (fbAuth) {
      var imageRef = fb.child("tasties/images");
      // var userReference = fb.child("users/" + fbAuth.uid);
      var syncArray = $firebaseArray(imageRef);
      // var syncArray = $firebaseArray(userReference.child("images"));
      $scope.images = syncArray;
    } else {
      $state.go("app.auth");
    };

    //submission
    $scope.submit = function() {

      geoFire.set("" + $scope.images.length, [GeoFactory.getLat(), GeoFactory.getLon()]).then(function() {
        console.log("Provided key has been added to GeoFire");
      }, function(error) {
        console.log("Error: " + error);
      });
      
      syncArray.$add({
        id: $scope.images.length,
        image: GeoFactory.getImg(),
        lat: GeoFactory.getLat(),
        lon: GeoFactory.getLon(),
        dish: $scope.dish.name,
        name: $scope.dish.restaurant,
        price: GeoFactory.getPrice()
      }).then(function() {
        // alert("Image has been uploaded");
      }).catch(function(){
        alert("Failure Uploading");
      });
    };
  });
