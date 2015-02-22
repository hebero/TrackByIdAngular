'use strict';

/**
 * @ngdoc overview
 * @name ejemplo3App
 * @description
 * # ejemplo3App
 *
 * Main module of the application.
 */
angular
  .module('ejemplo3App', [
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
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/amigos', {
        templateUrl: 'views/amigos.html',
        controller: 'amigosCtrl'
      })
      .when('/contenido', {
        templateUrl: 'views/contenido.html',
        controller: 'contenidoCtrl'
      })
      .when('/contenido2', {
        templateUrl: 'views/contenido2.html',
        controller: 'contenidoCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
