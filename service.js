angular
.module('app')
.service('TempoService', TempoService);

TempoService.$inject = [
    'Restangular',
    '$http'
];

function TempoService(Restangular, $http){
    this.get = function(){
        // return Restangular.one('http://apiadvisor.climatempo.com.br/api/v1/anl/synoptic/locale/BR?token=a6be39c8463cf8acac051e576ff799fb').get();
        var req = {
            method: 'GET',
            url: 'https://api.hgbrasil.com/weather?woeid=461295',
            headers:{
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                'Access-Control-Allow-Headers':'DNT,X-CustomHeader,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type',
                'Access-Control-Allow-Methods':'GET, POST, OPTIONS',
                'Access-Control-Allow-Credentials':'true'
            }
        }
        return $http(req).then(function(value){
            return value
        })}
}