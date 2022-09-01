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
                        url: 'https://thingproxy.freeboard.io/fetch/https://api.hgbrasil.com/weather?woeid='+id,
                        headers:{
                            "Content-Type": "application/json",
                            "Access-Control-Allow-Origin": "*"
                        }}).then(function(value){
                            return value
                        })
        return req;
    }

    this.consultaCidade = function(ip){
        var req = $http({ method: 'GET',
                        url: 'https://thingproxy.freeboard.io/fetch/https://api.hgbrasil.com/weather?key=4a5ef733&user_ip='+ip,
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
                    url: 'https://thingproxy.freeboard.io/fetch/https://api.hgbrasil.com/geoip?key=4a5ef733&address='+ip,
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
                    url:'https://api.allorigins.win/raw?url=https://ipinfo.io/ip',
                    headers:{
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    }
                }).then(function(value){
                    return value
                })
        return req;
    }
    
    this.images = function(){
        var page = Math.floor(Math.random() * (10000 - 1)) + 1;
        var req = $http({method: 'GET',
            url:'https://thingproxy.freeboard.io/fetch/https://api.pexels.com/v1/curated?query=clouds&per_page='+page,
                headers:{
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*",
                    "Authorization": "563492ad6f91700001000001ef09a161ef5d4cffb94691717af73edd"
                }
            }).then(function(value){
                return value
            })
        return req;
    }
}