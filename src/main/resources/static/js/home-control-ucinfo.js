// This is the version used for the HTML home-ajs.html with AngularJS
// This is the trending technology
var cs580App = angular.module('cs580App', []);

cs580App.controller('UCICtrl', function ($scope, $http) {

  $scope.loadUCI = function() {
	   $http.get("cs580/ucilist")
	   	.success(function(data) {
	   		$scope.ucilist = data;
	   });
  }

  $scope.loadUCI();

});
