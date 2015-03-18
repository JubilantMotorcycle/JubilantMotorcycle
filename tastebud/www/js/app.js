// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// angular.module('tastebud', ['ionic'])

// .run(function($ionicPlatform) {
//   $ionicPlatform.ready(function() {
//     // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
//     // for form inputs)
//     if(window.cordova && window.cordova.plugins.Keyboard) {
//       cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//     }
//     if(window.StatusBar) {
//       StatusBar.styleDefault();
//     }
//   });
// });

var app = angular.module('ionicApp', ['ionic'])

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/auth')

  // $stateProvider.state('app', {
  //   abstract: true,
  //   templateUrl: '../app/partials/template.html'
  // });

  // $stateProvider.state('app.todos', {
  //   abstract: true,
  //   url: '/todos',
  //   views: {
  //     todos: {
  //       template: '<ion-nav-view></ion-nav-view>'
  //     }
  //   }
  // });

  $stateProvider.state('app', {
      abstract: true,
      templateUrl: "../app/partials/template.html"
  });

  $stateProvider.state('app.auth', {
      url: '/auth',
      views: {
        auth: {
          templateUrl: '../app/partials/auth-partial.html'
        }
      }
  });

  $stateProvider.state('app.discovery', {
      url: '/discovery',
      views: {
        discovery: {
          templateUrl: '../app/partials/discovery-partial.html'
        }
      }
  });

  $stateProvider.state('submission', {
      abstract: true,
      templateUrl: "../app/partials/submission-template.html"
  });


  $stateProvider.state('submission.camera', {
    url: '/camera',
      views: {
        camera: {
          templateUrl: '../app/partials/submission-camera-partial.html'
        }
      }
  });

  $stateProvider.state('submission.info', {
    url: '/camera-info',
      views: {
        cameraInfo: {
          templateUrl: '../app/partials/submission-info-partial.html'
        }
      }
  });

  $stateProvider.state('submission.done', {
    url: '/camera-done',
      views: {
        cameraDone: {
          templateUrl: '../app/partials/submission-done-partial.html'
        }
      }
  });

  });

    // $stateProvider.state('app.todos.index', {
    //   url: '',
    //   templateUrl: 'todos.html',
    //   controller: 'TodosCtrl'
    // })

    // $stateProvider.state('app.todos.detail', {
    //   url: '/:todo',
    //   templateUrl: 'todo.html',
    //   controller: 'TodoCtrl',
    //   resolve: {
    //     todo: function($stateParams, TodosService) {
    //       return TodosService.getTodo($stateParams.todo)
    //     }
    //   }
    // })

})

app.factory('TodosService', function() {
  var todos = [
      {title: "Take out the trash", done: true},
      {title: "Do laundry", done: false},
      {title: "Start cooking dinner", done: false}
   ]

  return {
    todos: todos,
    getTodo: function(index) {
      return todos[index]
    }
  }
})

app.controller('TodosCtrl', function($scope, TodosService) {
  $scope.todos = TodosService.todos
})

app.controller('TodoCtrl', function($scope, todo) {
  $scope.todo = todo
})


  // $stateProvider.state('app.auth', {
  //   url: '',
  //   views: {
  //     auth: {
  //       templateUrl: 'auth.html',
  //       controller: 'authCtrl'
  //     }
  //   }
  // });

  // $stateProvider.state('app.auth', {
  //   url: '/auth',
  //   templateUrl: 'app/partials/auth-partial.html',
  //   controller: 'authCtrl'
  // });
  
  // $stateProvider.state('app.home', {
  //   url: '/',
  //   templateUrl: 'app/partials/discovery-partial.html',
  //   controller: 'discoveryCtrl'
  // });

  // $stateProvider.state('app.discovery', {
  //   url: '/discovery',
  //   templateUrl: 'app/partials/discovery-partial.html',
  //   controller: 'discoveryCtrl'
  // });

  // $stateProvider.state('app.submission', {
  //   url: '/submission',
  //   templateUrl: 'app/partials/submission-partial.html',
  //   controller: 'submissionCtrl'
  // });

