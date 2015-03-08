angular.module('projectsControllers', [])

.controller('projectsController', ['$scope', 'projectsService', function($scope, projectsService) {
        $scope.navigation.activeView = 'projects';

        projectsService.loadProjects()
            .success(function(projects) {
                $scope.projects = projects;
            });
}]);