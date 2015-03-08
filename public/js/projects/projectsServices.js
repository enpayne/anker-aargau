angular.module('projectsServices', [])

    .factory('projectsService', ["$http", function($http) {
        var projectsService = {};

        projectsService.loadProjects = function() {
            return $http.get('/projects');
        };

        return projectsService;
    }]);