var app = angular.module('starter', ['ionic', 'ionic.contrib.ui.tinderCards', 'ngCordova', 'firebase']);

var fb = new Firebase("https://sizzling-fire-8874.firebaseio.com/");

// fb.authWithOAuthPopup("facebook", function(error, authData) {
//   if (error) {
//     console.log("Login Failed!", error);
//   } else {
//     console.log("Authenticated successfully with payload:", authData);
//   }
// });

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
          controller: "FirebaseController",
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
          controller: "SecureController",
        }
      }
    })
    .state('camera.info', {
      url: "/info",
      views: {
        'camera-tab': {
          templateUrl: "app/partials/camera-info-partial.html"
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

app.controller("FirebaseController", function($scope, $state, $firebaseAuth) {

  var fbAuth = $firebaseAuth(fb);

  // login with Facebook
  $scope.fblogin = function() {
    fbAuth.$authWithOAuthPopup("facebook").then(function(authData) {
      $state.go("app.discovery");
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

app.controller('CardsCtrl', function($scope, $ionicHistory, $firebaseArray, TDCardDelegate) {
  console.log('CARDS CTRL');
  $ionicHistory.clearHistory();

  $scope.images = [];

  var fbAuth = fb.getAuth();
  if(fbAuth) {
      var userReference = fb.child("users/" + fbAuth.uid);
      var syncArray = $firebaseArray(userReference.child("images"));
      $scope.images = syncArray;
  } else {
      $state.go("app.auth");
  }

  $scope.cards = $scope.images;
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

app.controller('CardCtrl', function($scope, TDCardDelegate) {
  $scope.cardSwipedLeft = function(index) {
    console.log('LEFT SWIPE');
    // $scope.addCard();
  };
  $scope.cardSwipedRight = function(index) {
    console.log('RIGHT SWIPE');
    // $scope.addCard();
  };
});

app.controller("SecureController", function($scope, $ionicHistory, $firebaseArray, $cordovaCamera) {

  $ionicHistory.clearHistory();

  $scope.images = [];

  var fbAuth = fb.getAuth();

  if(fbAuth) {
    var userReference = fb.child("users/" + fbAuth.uid);
    var syncArray = $firebaseArray(userReference.child("images"));
    $scope.images = syncArray;
  } else {
    $state.go("app.auth");
  }

  $scope.upload = function() {
    var options = {
      quality : 75,
      destinationType : Camera.DestinationType.DATA_URL,
      sourceType : Camera.PictureSourceType.CAMERA,
      allowEdit : true,
      encodingType: Camera.EncodingType.JPEG,
      popoverOptions: CameraPopoverOptions,
      targetWidth: 500,
      targetHeight: 500,
      saveToPhotoAlbum: false
    };
    $cordovaCamera.getPicture(options).then(function(imageData) {
      syncArray.$add({image: imageData}).then(function() {
          alert("Image has been uploaded");
      });
    }, function(error) {
      console.error(error);
    });
  }
});