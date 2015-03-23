angular.module('starter')
  .controller("SecureCtrl", function($scope, $ionicHistory, $firebaseArray, $cordovaCamera) {

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
    }

    $scope.upload = function() {

      // var carne = 'hi';
      // syncArray.$add({image: carne}).then(function() {
      //       alert("Image has been uploaded");
      // });
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
        syncArray.$add({
          image: imageData
        }).then(function() {
          alert("Image has been uploaded");
        });
      }, function(error) {
        console.error(error);
      });
    }

  });
