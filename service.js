angular
.module('app')
.service('TempoService', TempoService);

TempoService.$inject = [
    'Restangular',
    '$http'
];

function TempoService(Restangular, $http){
    this.consultaTempoCidade = function(id){
        var req = $http({ method: 'GET',
                        url: 'https://api.hgbrasil.com/weather?woeid='+id,
                        headers:{
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "*"
                        }}).then(function(value){
                            return value
                        })
        return req;
    }

    this.consultaCidade = function(){
        var req = $http({ method: 'GET',
                        url: 'https://api.hgbrasil.com/weather?key=4a5ef733&user_ip=remote',
                        headers:{
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "*"
                        }}).then(function(value){
                            return value
                        })   
        // req = {
        //     cid: '',
        //     city: 'Buritis, MG',
        //     city_name: "Buritis",
        //     condition_code: "27",
        //     condition_slug: "clear_night",
        //     currently: "noite",
        //     date: "05/06/2022",
        //     description: "Tempo nublado",
        //     humidity: 57,
        //     img_id: "27n",
        //     sunrise: "06:27 am",
        //     sunset: "05:41 pm",
        //     temp: 19,
        //     time: "21:47",
        //     wind_speedy: "0.86 km/h"
        // }   
        return req;
    }

   
    this.geoIp = function(ip){
        var req = $http({method: 'GET',
                    url: 'https://api.hgbrasil.com/geoip?key=4a5ef733&address='+ip,
                    headers:{
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                        "address":"177.66.141.88",
                        "precision":"true"
                    }}).then(function(value){
                        return value
                    })   
            return req;     
    }
    
    this.meuip = function(){
        var req = $http({method: 'GET',
                            url:'http://meuip.com/api/meuip.php'
                        }).then(function(value){
                            return value
                        })
        return req;
    }
    
} 