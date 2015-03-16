
angular.module('tastebud', ['ionic'])

.directive('discovery', function(){
  return {
    restrict: 'EA',
    templateUrl: './app/discover/discovery.html'
  };
});
