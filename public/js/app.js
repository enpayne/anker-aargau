angular.module('anker-aargau', [])

    .controller('articleController', ['$scope', function($scope) {
        $scope.newArticle = "";
        $scope.articles = [];

        $scope.addNewArticle = function() {
            $scope.articles.push($scope.newArticle);
            $scope.newArticle = "";
        };

    }]);