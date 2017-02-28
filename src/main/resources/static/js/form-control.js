var cs580App = angular.module('cs580App', []);

cs580App.controller('PatientCtrl', function ($scope, $http) {

  $scope.addPatient = function() 
  {
	  $http.post ("/cs580/patient", {'f_name':$scope.firstName, 'm_name':$scope.middleName , 'l_name':$scope.lastName , 'phone':$scope.phone, 'Urgent Care':$scope.ucName, 'Wait Time':$scope.waitTime} )
		.success (function(data, status, header, config) {
			console.log("Your information is saved sucessfully");
		});
  }

  $scope.addPatient();

});