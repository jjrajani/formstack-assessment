'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl',
    controllerAs: 'vm'
  });
}])

.controller('HomeCtrl', [function() {
  this.randomFloat = function() {
     return parseFloat(Math.random().toFixed(2));
   };

   this.number = this.randomFloat() * 100;
   this.percent = this.number + "%";

   this.validNumber = function(number) {
     return (number >=0 && number <= 100);
   }

   this.toggleValid = function(valid) {
     if (valid) {
       this.number = 200;
     } else {
       this.number = this.randomFloat() * 100;
     }
   }
}]);
