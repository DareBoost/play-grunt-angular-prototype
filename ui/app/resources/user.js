angular.module('app').factory('User', ['$resource', function ($resource) {
  'use strict';

  return $resource('/api/user/:userId', {'userId': '@id'});

}]);
