var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
    $http.get("customers.json")
    .then(function (response) {$scope.names = response.data.records;});
});