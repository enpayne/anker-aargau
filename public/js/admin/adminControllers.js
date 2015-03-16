angular.module('adminControllers', [])

.controller('adminCreateController', ['$scope', '$location', 'adminService', function($scope, $location, adminService) {
        $scope.newProject = {
            published: true
        };

        $scope.saveProject = function() {
            adminService.createProject($scope.newProject)
                .success(function() {
                    $location.path('/admin');
                });
        };

        $scope.cancelCreate = function() {
            $location.path('/admin');
        };
}])

.controller('adminController', ['$scope', 'adminService', function($scope, adminService) {
        $scope.navigation.activeView = 'admin';

        var loadProjects = function() {
            adminService.loadProjects()
                .success(function(projects) {
                    $scope.projects = projects;
                });
        };

        $scope.showProjectDetails = function(projectId) {
            if ($scope.openProject === projectId) {
                delete $scope.openProject;
            } else {
                $scope.openProject = projectId;
            }

        };

        $scope.updateProject = function(project) {
            adminService.updateProject(project)
                .success(function() {
                    loadProjects();
                });
        };

        $scope.deleteProject = function(project) {
            adminService.deleteProject(project._id)
                .success(function() {
                    loadProjects();
                });
        };

        loadProjects();
}]);