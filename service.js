angular
.module('app')
.service('TempoService', TempoService);

TempoService.$inject = [
    'Restangular',
    '$http'
];

function TempoService(Restangular, $http){
    this.consultaTempoCidade = function(id){
        var req = $http.get('/tempo?woeid=' + id).then(function(value){
                            return value
                        })
        return req;
    }

    this.consultaCidade = function(ip){
        var req = $http.get('/cidade?ip=' + ip.ip).then(function(value){
                            return value
                        })   
        return req;
    }

   
    this.geoIp = function(ip){
        var req = $http.get('/geoip?ip=' + ip.ip).then(function(value){
                        return value
                    })   
            return req;     
    }
    
    this.meuip = function(){
        var req = $http.get('/meuip').then(function(value){
                    return value
                })
        return req;
    }
    
    this.images = function(){
        var page = Math.floor(Math.random() * (10000 - 1)) + 1;
        var req = $http.get('/imagens').then(function(value){
                return value
            })
        return req;
    }
}