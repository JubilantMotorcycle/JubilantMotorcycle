angular.module('ionicApp', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

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
          // controller: 'HomeTabCtrl'
        }
      }
    })
    .state('app.discovery', {
      url: "/discovery",
      views: {
        'discover-tab': {
          templateUrl: "../app/partials/discovery-partial.html"
        }
      }
    });
    $urlRouterProvider.otherwise("/auth");
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
          templateUrl: "../app/partials/camera-shoot-partial.html"
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
   $urlRouterProvider.otherwise("/camera/shoot");

})

.controller('HomeTabCtrl', function($scope) {
  console.log('HomeTabCtrl');
});