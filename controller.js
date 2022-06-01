angular
.module('app')
.controller('TempoController', TempoController);

TempoController.$inject = [
    '$scope',
    'TempoService',
    'Restangular',
    '$http'
];

function TempoController($scope, TempoService, Restangular, $http){
    
    $scope.teste = teste;

    function teste(){
        TempoService.get();
    }
}
