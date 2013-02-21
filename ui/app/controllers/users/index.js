angular.module('app').controller('UserIndexCtrl', ['$scope', 'User', function ($scope, User) {
  'use strict';

  $scope.users = User.query();
}]);
