'use strict';

/**
 * @ngdoc function
 * @name ejemplo3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ejemplo3App
 */
angular.module('ejemplo3App')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
angular.module('ejemplo3App')
	.controller('amigosCtrl', ['$scope', '$http', function($scope, $http){
		$http.get('http://localhost:3000/db')
		.success(function(data){
			$scope.datos = data.amigos;
		});
	}]);
angular.module('ejemplo3App')
  .controller('contenidoCtrl', ['$scope', '$http', function($scope, $http){
    $http.get('http://localhost:3000/db')
    .success(function(data){
      $scope.datos = data.Publicaciones;
    });
  }]);