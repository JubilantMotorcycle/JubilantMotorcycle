var app = angular.module('ionicApp');

app.controller('discoveryCtrl', function($scope){
  $scope.photos = [
  {
    src : '../../../img/location.png',
    distance : 5,
  },
  {
    src : '../../../img/location.png',
    distance : 3,
  }
  ];

});
