'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope','$http',function($scope, $http) {
	$http.get("http://localhost:3000/users/getData")
    .success(function(response) {
        $scope.myWelcome = response;
        console.log("this is coming from wherever:" + response);
    });
}]);