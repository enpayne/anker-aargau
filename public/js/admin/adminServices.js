angular.module('adminServices', [])

    .factory('adminService', ["$http", function($http) {
        var adminService = {};

        adminService.loadProjects = function() {
            return $http.get('/api/projects');
        };

        adminService.updateProject = function(project) {
            var id = project._id;
            return $http.put('/api/projects/' + id, {
                project : project
            });
        };

        adminService.deleteProject = function(projectId) {
          return $http.delete('/api/projects/' + projectId);
        };

        adminService.createProject = function(project) {
            return $http.post('/api/projects', {
                project : project
            })
        };

        return adminService;
    }]);