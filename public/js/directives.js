angular.module('pageDirectives', [])

    .directive('ankerHeader', function() {
        return {
            restrict : 'E',
            templateUrl : 'partials/page-header.html',
            link : function (scope, element, attrs) {



            }
        };
    });