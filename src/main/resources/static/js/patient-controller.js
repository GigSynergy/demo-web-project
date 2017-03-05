angular.module('cs580App',[])
angular.module('cs580App')
	
	.controller('patient-controller',['$scope','$http',function($scope,$http) {
	
    	
    $scope.save = function() 
    {
    	console.log($scope.patient);
    	return $http.post("/cs580/patient",$scope.patient);
    };
    
    $scope.reset = function()
    {
    	$scope.patient.firstName ='';
    	$scope.patient.middleName ='';
    	$scope.patient.lastName='';
    	$scope.patient.phone='';
    	
    	console.log($scope.patient);
    	//return $http.post("/cs580/patient",$scope.patient);
    };
}])
