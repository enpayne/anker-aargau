angular.module('projectsControllers', [])

.controller('projectsController', ['$scope', 'projectsService', function($scope, projectsService) {
        $scope.navigation.activeView = 'projects';

        //projectsService.loadProjects()
        //    .success(function(projects) {
        //        $scope.projects = projects;
        //    });

        $scope.projects = [

            {
                title : 'Arbeitscoach',
                leadWord: "integrieren",
                content: [
                    'Unser Angebot beinhaltet die vereinbarte, definierte und zeitlich unbefristete Begleitung am Arbeitsplatz' +
                    'für psychisch beeinträchtigte Menschen mit dem Ziel, die Arbeitsstelle zu erhalten oder nach dem Verlust der' +
                    'Arbeitsstelle schnellstmögliche Reintegration in den 1. Arbeitsmarkt. Dies setzt die Bereitschaft aller Beteiligten' +
                    'zur Fortsetzung, oder zur Anstellung unter speziellen Bedingungen, voraus.',
                    'Der ArbeitsCoach unterstützt und berät in' +
                    'Fragen der Gesundheit/Krankheit, Belastbarkeit, Sozialrecht und Arbeitsrecht die involvierten Personen sowie das Arbeitsteam. ' +
                    'Er kann in schwierigen Situationen am Arbeitsplatz durch den Klienten oder dessen Vorgesetzten beigezogen werden.'
                ]

            },
            {
                title : 'Apika',
                leadWord : "anstossen",
                content : [
                    'Die im Jahr 2011 neu gestaltete Webseite Apika will alle Dienstleistungen für psychisch Kranke Menschen zusammenfassen. Ziel ist, im Sektor psychische Erkrankung und Behinderung zu einem Überblick der bestehenden Angebote im Kanton zu verhelfen.Betroffene, Angehörige und Fachpersonen profitieren von dieser Servicedienstleistung.',
                    'Hier finden Sie Angebote aus den Bereichen Wohnen, Arbeit, Pflege und Beratung: <a href="http://apika.ch/">apika.ch</a></p>'
                ]
            }


        ]
}]);