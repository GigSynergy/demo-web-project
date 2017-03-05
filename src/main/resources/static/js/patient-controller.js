angular.module('cs580App',[])

angular.module('cs580App')
	
	.controller('patient-controller',['$scope','$http',function($scope,$http) {
	
    	
    $scope.save = function() 
    {
    	
    	console.log($scope.patient);
    	return $http.post("/cs580/patient",$scope.patient);
    };
}])