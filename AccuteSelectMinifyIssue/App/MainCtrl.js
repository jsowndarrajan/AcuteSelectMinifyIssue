(function () {
    'use strict'

    var app = angular.module('app', ["acute.select"]);

    app.controller('mainCtrl', ['$scope', function ($scope) {
        $scope.title = "Acute select";
        
        $scope.selectedMonth = {};

        $scope.getAllMonths = function (callback) {
            callback($scope.allMonths);
        };

        $scope.monthSelected = function (month) {
            $scope.stateInfo = month.name + " (" + month.id + ")";
        }

        $scope.allMonths = [
            { name: "January", id: 1},
            { name: "February", id: 2},
            { name: "March", id: 3},
            { name: "April", id: 4},
            { name: "May", id: 5},
            { name: "June", id: 6},
            { name: "July", id: 7},
            { name: "August", id: 8},
            { name: "September", id: 9},
            { name: "October", id: 10},
            { name: "November", id: 11},
            { name: "December", id: 12}           
        ];
    }]);

})();