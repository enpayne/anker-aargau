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
                controller: 'clubControllers'
            })
            .when('/news', {
                templateUrl: '/partials/news.html',
                controller: 'newsControllers'
            })
            .when('/contact', {
                templateUrl: '/partials/contact.html',
                controller: 'contactControllers'
            }).
            otherwise({
                redirectTo: '/projects'
            });
    }]);
