angular.module('pageDirectives', [])

    .directive('ankerHeader', function() {
        return {
            restrict : 'E',
            replace: true,
            templateUrl : 'partials/page-header.html'
        };
    })

    .directive('ankerFooter', function() {
        return {
            restrict : 'E',
            replace: true,
            scope : {
              activeView : '='
            },
            templateUrl : 'partials/page-footer.html'
        };
    });