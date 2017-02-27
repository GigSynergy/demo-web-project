angular.module('myApp')

.controller('patient-controller',[ $scope, function($scope) {

    $scope.addPatient = function() {
    	console.log($scope.patient);
        
    };
}])