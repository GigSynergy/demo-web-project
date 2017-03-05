angular.module('cs580App',[])

angular.module('cs580App')
	
	.controller('patient-controller',['$scope','$http',function($scope,$http) {
	
    	
    $scope.save = function() 
    {
<<<<<<< HEAD
=======
    	var x = localStorage.getItem("placeName");
        document.getElementById("demo").innerHTML = x;
        
       
     	var y = localStorage.getItem("placeTime");
        document.getElementById("demo2").innerHTML = y;
        $scope.patient.ucName=x;
        $scope.patient.ucWaitTime=y;
    	console.log($scope.patient);
    	//JSON.stringify($scope.patient);
>>>>>>> 287d8d6b75021cac07888efdf5a628957ffe9063
    	
    	console.log($scope.patient);
    	return $http.post("/cs580/patient",$scope.patient);
    };
}])