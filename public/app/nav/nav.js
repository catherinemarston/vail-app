angular.module('resortApp')
.controller('navCtrl', ['$scope', function($scope){
  $scope.isNavCollapsed = true;
  $scope.isCollapsed = false;
  $scope.isCollapsedHorizontal = false;
}]);
.directive('navDirective', function(){
  restrict: 'EA',
  templateUrl: './nav.html'
})
