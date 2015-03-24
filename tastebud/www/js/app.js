var app = angular.module('starter', ['ionic', 'ionic.contrib.ui.tinderCards', 'ngCordova', 'firebase', 'ngMap']);

var fb = new Firebase(fbUrl);

// Create a new GeoFire instance, pulling data from the public transit data
var geoFire = new GeoFire(fb.child("tasties/geofire"));

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      abstract: true,
      templateUrl: "app/partials/template.html"
    })
    .state('app.auth', {
      url: "/auth",
      views: {
        'discover-tab': {
          templateUrl: "app/partials/auth-partial.html",
          controller: "FirebaseCtrl",
          cache: false,
        }
      }
    })
    .state('app.discovery', {
      url: "/discovery",
      views: {
        'discover-tab': {
          templateUrl: "app/partials/discovery-partial.html",
          controller: "CardsCtrl",
        }
      }
    });
    $stateProvider
      .state('camera', {
        abstract: true,
        templateUrl: "app/partials/template.html",
    })
    .state('camera.shoot', {
      url: '/shoot',
      views: {
        'camera-tab': {
          templateUrl: "app/partials/camera-shoot-partial.html",
          controller: "SecureCtrl",
        }
      }
    })
    .state('camera.info', {
      url: "/info",
      views: {
        'camera-tab': {
          templateUrl: "app/partials/camera-info-partial.html",
          controller: "DetailsCtrl",
        }
      }
    })
    .state('camera.success', {
      url: "/success",
      views: {
        'camera-tab': {
          templateUrl: "app/partials/camera-success-partial.html"
        }
      }
    });
   $urlRouterProvider.otherwise("/auth");
});

app.directive('noScroll', function($document) {
  return {
    restrict: 'A',
    link: function($scope, $element, $attr) {
      $document.on('touchmove', function(e) {
        e.preventDefault();
      });
    }
  }
});

app.factory('GeoFactory', function($cordovaGeolocation){
  var lat = 0;
  var lon = 0;
  var dish = "default-dish";
  var bizName = "default-name";
  var price = "$";
  var img = "";
  // sett info
  var setLat = function(val){lat = val;};
  var setLon = function(val){lon = val;};
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

  var centerOnMe= function(cb){
      $cordovaGeolocation
        .getCurrentPosition()
        .then(function (position) {
          alert(position.coords.latitude, position.coords.longitude);
          lat = position.coords.latitude;
          lon = position.coords.longitude;
        }, function(err) {
          console.log('centerOnMe() failure');
        });
  };

  return {setLat: setLat,
          setLon: setLon,
          setDish: setDish,
          setBizName: setBizName,
          setPrice: setPrice,
          setImg: setImg,
          centerOnMe: centerOnMe,
          getLat: getLat,
          getLon: getLon,
          getDish: getDish,
          getBizName: getBizName,
          getPrice: getPrice,
          getImg: getImg
  }   
});
