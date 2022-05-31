angular.module('app').config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'teste.html',
            controller: 'TempoController'
        });
});