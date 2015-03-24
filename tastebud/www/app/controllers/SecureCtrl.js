angular.module('starter')
  .controller("SecureCtrl", function($scope, $ionicHistory, $firebaseArray, $cordovaCamera, $ionicLoading, $cordovaGeolocation, GeoFactory) {

    $ionicHistory.clearHistory();

    $scope.images = [];

    var fbAuth = fb.getAuth();

    if (fbAuth) {
      var imageRef = fb.child("tasties/images").limitToLast(1);
      // var userReference = fb.child("users/" + fbAuth.uid);
      var syncArray = $firebaseArray(imageRef);
      // var syncArray = $firebaseArray(userReference.child("images"));
      $scope.images = syncArray;
    } else {
      $state.go("app.auth");
    };

    $scope.centerOnMe= function(){
        $cordovaGeolocation
          .getCurrentPosition()
          .then(function (position) {
            // alert(position.coords.latitude);
            GeoFactory.setLat(position.coords.latitude);
            // alert(position.coords.longitude);
            GeoFactory.setLon(position.coords.longitude);
          }, function(err) {
            console.log('centerOnMe() failure');
          });
    };

    $scope.upload = function() {

      var options = {
        quality: 75,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        popoverOptions: CameraPopoverOptions,
        targetWidth: 500,
        targetHeight: 500,
        saveToPhotoAlbum: false
      };
      $cordovaCamera.getPicture(options).then(function(imageData) {
        GeoFactory.setImg(imageData);
        // alert(GeoFactory.getImg());
        // alert(GeoFactory.getLat());
        // alert(GeoFactory.getLon());
        // syncArray.$add({
        //   image: imageData
        // }).then(function() {
        //   alert("Image has been uploaded");
        // });
      }, function(error) {
        console.error(error);
      });
    }

  });