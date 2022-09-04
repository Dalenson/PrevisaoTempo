angular.module('app').config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'tempo.html',
            controller: 'TempoController'
        });
});