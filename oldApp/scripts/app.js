'use strict';

/**
 * @ngdoc overview
 * @name angNews2App
 * @description
 * # angNews2App
 *
 * Main module of the application.
 */
angular
  .module('angNews2App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });

/*var app = angular.module('angNews2App');*/