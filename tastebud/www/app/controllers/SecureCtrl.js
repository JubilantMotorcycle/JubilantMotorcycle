angular.module('starter')
  .factory('GeoFactory', function(){
    var lat = 0;
    var lon = 0;
    var dish = "";
    var bizName = "";
    var price = "$";
    var img = "";
    // sett info
    var setLat = function(val){lat = val;};
    var setLon = function(val){lat = val;};
    var setDish = function(val){dish = val;};
    var setBizName = function(val){bizName = val;};
    var setPrice = function(val){price = val};
    var setImg = function(val){img = val};
    // get info
    var getLat = function(){return lat;};
    var getLon = function(){return lon;};  
    var getDish = function(){return dish;};
    var getBizName = function(){return bizName;};
    var getPrice = function(){return price;};
    var getImg = function(){return img;};

    return {setLat: setLat,
            setLon: setLon,
            setDish: setDish,
            setBizName: setBizName,
            setPrice: setPrice,
            setImg: setImg,
            getLat: getLat,
            getLon: getLon,
            getDish: getDish,
            getBizName: getBizName,
            getPrice: getPrice,
            getImg: getImg
    }   
 })
  .controller("SecureCtrl", function($scope, $ionicHistory, $firebaseArray, $cordovaCamera, GeoFactory) {

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
        alert(GeoFactory.getImg());
        // syncArray.$add({
        //   image: imageData
        // }).then(function() {
        //   alert("Image has been uploaded");
        // });
      }, function(error) {
        console.error(error);
      });
    }

  })

  .controller('MarkerRemoveCtrl', function($scope, $ionicLoading) {
    $scope.centerOnMe= function(){
      $scope.positions = [];
        
      $ionicLoading.show({
        template: 'Loading...'
      });

      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        console.log('position: ', position);
        $scope.positions.push({lat: pos.k,lng: pos.B});
        console.log(pos);
        $scope.map.setCenter(pos);
        $ionicLoading.hide();
      });
    };
  });
