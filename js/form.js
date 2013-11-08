var userForm = angular.module('userForm',[]);

userForm.controller('userFormCtrl', ['$scope', function userFormCtrl($scope) {
  $scope.users = [];

  $scope.addUser = function(){
    $scope.users.push($scope.user);
    $scope.user = undefined;
  }
}]);

