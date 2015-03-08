angular.module('adminServices', [])

    .factory('adminService', ["$http", function($http) {
        var adminService = {};

        adminService.loadProjects = function() {
            return $http.get('/projects');
        };

        adminService.updateProject = function(project) {
            var id = project._id;
            return $http.put('/projects/' + id, {
                project : project
            });
        };

        adminService.deleteProject = function(projectId) {
          return $http.delete('/projects/' + projectId);
        };

        adminService.createProject = function(project) {
            return $http.post('/projects', {
                project : project
            })
        };

        return adminService;
    }]);