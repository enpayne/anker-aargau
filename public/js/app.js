angular.module('anker-aargau', [
    'ngRoute',
    'projectsControllers',
    'clubControllers',
    'newsControllers',
    'contactControllers'
])

.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/projects', {
                templateUrl: '/partials/projects.html',
                controller: 'projectsController'
            })
            .when('/club', {
                templateUrl: '/partials/club.html',
                controller: 'clubController'
            })
            .when('/news', {
                templateUrl: '/partials/news.html',
                controller: 'newsController'
            })
            .when('/contact', {
                templateUrl: '/partials/contact.html',
                controller: 'contactController'
            }).
            otherwise({
                redirectTo: '/projects'
            });
    }]);
