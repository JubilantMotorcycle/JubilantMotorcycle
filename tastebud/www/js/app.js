var app = angular.module('starter', ['ionic', 'ionic.contrib.ui.tinderCards', 'ngCordova', 'firebase']);

var fb = new Firebase(fbUrl);

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



