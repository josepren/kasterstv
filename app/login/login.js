'use strict';

angular.module('myApp.login', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'login/login.html',
    controller: 'loginCtrl'
  });
}])

.controller('loginCtrl', ['$scope','$http',function($scope, $http) {
	

  $scope.cancel=$scope.$dismiss;
  $scope.submit = function (email, password) {
    var parameter = JSON.stringify({username:email, passwd:password});
    $http({
        url: "http://localhost:3000/users/login/",
        method: "POST",
        data: parameter,
        headers: {'Content-Type': 'application/json'}})
    .then(function successCallback(response) {
      console.log("Response Server: ");
      console.log(response.data);
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      console.log("Error Server: "+response);
    });
    console.log("Email: "+email+" Password: "+password)
  };
  $scope.checkRestaurantId = function() {
  	var parameter = JSON.stringify({kindof:"user", restaurantId:$scope.restid, password:"none"});
    $http({
        url: "http://localhost:3000/users/checkData/",
        method: "POST",
        data: parameter,
        headers: {'Content-Type': 'application/json'}})
    .then(function successCallback(response) {
    	console.log("Response Server: ");
    	console.log(response.data);
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    console.log("Error Server: "+response);
  });
    //console.log("Hello: "+$scope.restid);
    //console.log("Hello2: "+parameter);
  };
  $scope.insertDataInDb = function() {
  	var parameter = JSON.stringify({type:"user", restaurantId:$scope.restid, password:"none"});
    $http.get("http://localhost:3000/users/insertData",parameter)
    .success(function(response) {
        $scope.myWelcome1 = response;
        console.log("Done with insertion"+response);
    });
  };
	
}])