angular.module('starter')
.controller('CardsCtrl', function($scope, $ionicHistory, $firebaseArray, TDCardDelegate) {
  console.log('CARDS CTRL');
  $ionicHistory.clearHistory();

  $scope.images = [];

  var fbAuth = fb.getAuth();
  if(fbAuth) {
    var imageRef = fb.child("tasties/");
    // var userReference = fb.child("users/" + fbAuth.uid);
    var syncArray = $firebaseArray(imageRef.child("images"));
    // var syncArray = $firebaseArray(userReference.child("images"));
    $scope.images = syncArray;
  } else {
      $state.go("app.auth");
  }

  $scope.cards = $scope.images;

  console.log('array', $scope.cards);
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
