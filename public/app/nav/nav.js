angular.module('resortApp', ['ui.bootstrap'])
.controller('navCtrl', ['$scope', function($scope){
  $scope.isNavCollapsed = true;
  $scope.isCollapsed = false;
  $scope.isCollapsedHorizontal = false;
}]);
.directive('nav', function(){
  restrict: 'EA',
  templateUrl: './nav.html'
})
