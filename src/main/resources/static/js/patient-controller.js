angular.module('cs580App',[])
angular.module('cs580App')
	
	.controller('patient-controller',['$scope','$http',function($scope,$http) {
		
		var x = localStorage.getItem("placeName");

	    document.getElementById("ucName").value = x;

	   

	  var y = localStorage.getItem("placeTime");

	    document.getElementById("ucWaitTime").value = y;

    	
    $scope.save = function() 
    {
    	$scope.patient.ucName = x;
    	$scope.patient.ucWaitTime = y;
    	console.log($scope.patient.ucName);
    	console.log($scope.patient.ucWaitTime);
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
