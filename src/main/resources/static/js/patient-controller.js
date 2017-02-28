angular.module('cs580App')

cs580App.controller('patientctrl',[ $scope, function($scope) {

    $scope.save = function() 
    {
    	console.log($scope.patient);
    	JSON.stringify($scope.patient);
    };
}])