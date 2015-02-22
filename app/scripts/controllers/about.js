'use strict';

/**
 * @ngdoc function
 * @name ejemplo3App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ejemplo3App
 */
angular.module('ejemplo3App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
