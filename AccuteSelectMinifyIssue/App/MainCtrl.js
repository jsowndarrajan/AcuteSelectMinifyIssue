(function () {
    'use strict'

    var app = angular.module('app', ["acute.select"]);

    app.controller('mainCtrl', ['$scope', function ($scope) {
        $scope.title = "Acute select minification issue";

        $scope.selectedState = '';

        $scope.getAllStates = function (callback) {
            callback($scope.allStates);
        };

        $scope.stateSelected = function (state) {
            $scope.stateInfo = state.name + " (" + state.id + ")";
        }

        $scope.allStates = [
            { "name": "Alabama", "id": "AL" },
            { "name": "Alaska", "id": "AK" }
        ];
    }]);

})();