angular.module('newsControllers', [])

.controller('newsController', ['$scope', function($scope) {
        $scope.navigation.activeView = 'news';
}]);