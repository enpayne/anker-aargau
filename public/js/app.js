angular.module('anker-aargau', [
    'ngRoute',
    'pageControllers',
    'projectsControllers',
    'projectsServices',
    'clubControllers',
    'clubServices',
    'newsControllers',
    'newsServices',
    'contactControllers',
    'adminServices',
    'adminControllers',
    'contactServices',
    'pageDirectives'
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
            })
            .when('/admin', {
                templateUrl: '/partials/admin.html',
                controller: 'adminController'
            }).
            otherwise({
                redirectTo: '/projects'
            });
    }]);
