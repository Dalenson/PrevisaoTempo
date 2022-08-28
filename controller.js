angular
.module('app')
.controller('TempoController', TempoController);

TempoController.$inject = [
    '$scope',
    'TempoService',
    'Restangular',
    '$http',
    '$timeout'
];

function TempoController($scope, TempoService, Restangular, $http, $timeout){
    
    $scope.teste = teste;
    $scope.consultaCidade = consultaCidade;

    function teste(){
        TempoService.get();
    }
    
    function consultaCidade(){
        var ip = Promise.resolve(TempoService.meuip());
        
        ip.then(function(value){
            var data = TempoService.consultaCidade(value.data);
            data.then(function(value){
                $scope.nomeCity = value.data.results.city
                $scope.descricao = value.data.results.description
                $scope.temp = value.data.results.temp+'°c';
                $scope.forcast = value.data.results.forecast;
                if(value.data.results.description.includes('nublado')){
                    $('#img').attr("src",'/img/nublado.png')
                }
                if(value.data.results.description.includes('huva')){
                    $('#img').attr("src",'/img/chuva.png')
                }
                if(value.data.results.description.includes('limpo')){
                    $('#img').attr("src",'/img/sol.png')
                }
            })
        
            var geo = TempoService.geoIp(value.data);

            geo.then(function(value){
                var map = L.map('map', {
                    center: [value.data.results.latitude,value.data.results.longitude],
                    zoom: 11
                });
                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '© OpenStreetMap'
                }).addTo(map);
            })
        })
        
        
        
    }
}