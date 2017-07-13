'use strict';

angular.module('myApp.home', ['ngRoute'])


.controller('HomeCtrl', ['$scope', function($scope) {
  $scope.randomFloat = function() {
     return parseFloat(Math.random().toFixed(2));
   };

   $scope.number = $scope.randomFloat() * 100;
   $scope.percent = $scope.number + "%";

   $scope.validNumber = function(number) {
     return (number >=0 && number <= 100);
   }

   $scope.toggleValid = function(valid) {
     if (valid) {
       $scope.number = 200;
     } else {
       $scope.number = $scope.randomFloat() * 100;
     }
   }
}])

.directive('home', function() {
  return {
    templateUrl: 'home/home.html',
  };
});
