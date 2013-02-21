angular.module('app').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
  'use strict';

  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/', { templateUrl: '/views/welcome', controller: 'WelcomeCtrl' })
    .when('/users', { templateUrl: '/views/users/index', controller: 'UserIndexCtrl' })
    .when('/user/:userId', { templateUrl: '/views/users/edit', controller: 'UserEditCtrl' })

    // Fallback
    .otherwise({ redirectTo: '/' });
}]);
