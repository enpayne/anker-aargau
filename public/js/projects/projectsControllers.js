angular.module('projectsControllers', [])

.controller('projectsController', ['$scope', function($scope) {
    $scope.projects = ['some project', 'another project'];
}]);