angular.module('pageControllers', [])

    .controller('pageController', ['$scope', function($scope) {
        $scope.navigation = { activeView : '' };
    }]);