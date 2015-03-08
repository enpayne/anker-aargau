angular.module('adminControllers', [])

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

        $scope.createProject = function() {
            adminService.createProject($scope.newProject)
                .success(function() {
                    loadProjects();
                    $scope.showCreate = false;
                });
        }

        $scope.showCreateProjectForm = function() {
            $scope.showCreate = true;
            $scope.newProject = {};
        };

        $scope.cancelCreate = function() {
            $scope.showCreate = false;
        }

        loadProjects();
}]);