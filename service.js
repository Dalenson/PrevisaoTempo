(function () {
    'use strict';
    
    angular
    .module('app')
    .factory('TempoService', TempoService);

    TempoService.$inject = [];

    function TempoService(){
        var service = new EventEmitter();
        console.log('service')
        _.extend(service, TempoService);

        service.get = get;

        return service;

        function get(){
            console.log('foi');
        }
    }
})