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
