angular.module('pageDirectives', [])

    .directive('ankerHeader', function() {
        return {
            restrict : 'E',
            replace: true,
            templateUrl : 'partials/page-header.html'
        };
    })

    .directive('ankerSplash', function() {
        return {
            restrict : 'E',
            replace: true,
            scope : {
              activeView : '='
            },
            templateUrl : 'partials/page-splash.html'
        };
    });