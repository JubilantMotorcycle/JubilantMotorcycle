var app = angular.module('ionicApp', ['ionic', 'ionic.contrib.ui.tinderCards'])

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      abstract: true,
      templateUrl: "../app/partials/template.html"
    })
    .state('app.auth', {
      url: "/auth",
      views: {
        'discover-tab': {
          templateUrl: "../app/partials/auth-partial.html",
        }
      }
    })
    .state('app.discovery', {
      url: "/discovery",
      views: {
        'discover-tab': {
          templateUrl: "../app/partials/discovery-partial.html",
          controller: "CardsCtrl",
        }
      }
    });
    $stateProvider
      .state('camera', {
        abstract: true,
        url: '/camera',
        templateUrl: "../app/partials/template.html",
    })
    .state('camera.shoot', {
      url: "/shoot",
      views: {
        'camera-tab': {
          templateUrl: "../app/partials/camera-shoot-partial.html",
          controller: "cameraController", 
        }
      }
    })
    .state('camera.info', {
      url: "/info",
      views: {
        'camera-tab': {
          templateUrl: "../app/partials/camera-info-partial.html"
        }
      }
    })
    .state('camera.success', {
      url: "/success",
      views: {
        'camera-tab': {
          templateUrl: "../app/partials/camera-success-partial.html"
        }
      }
    });
   $urlRouterProvider.otherwise("/auth");
});