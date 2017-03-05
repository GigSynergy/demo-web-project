angular.module('cs580App',[])

angular.module('cs580App')
	
	.controller('patient-controller',['$scope','$http',function($scope,$http) {
	
    	
    $scope.save = function() 
    {

    /*	var x = localStorage.getItem("placeName");
    	var x = localStorage.getItem("placeName");
        document.getElementById("demo").innerHTML = x;
        
       
     	var y = localStorage.getItem("placeTime");
        document.getElementById("demo2").innerHTML = y;
        $scope.patient.ucName=x;
        $scope.patient.ucWaitTime=y;
    	console.log($scope.patient);
    	//JSON.stringify($scope.patient);

    	

    	return $http.post("/cs580/patient",$scope.patient);*/
    };
    $scope.reset = function()
    {
    	$scope.patient.firstName ='';
    	$scope.patient.middleName ='';
    	$scope.patient.lastName='';
    	$scope.patient.phone='';
    	
    	console.log($scope.patient);
    	return $http.post("/cs580/patient",$scope.patient);
    };
}])
