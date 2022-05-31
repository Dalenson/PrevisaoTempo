angular
.module('app')
.service('TempoService', TempoService);

TempoService.$inject = [];

function TempoService(){
    this.get = function(){
        return 'funcionou teste' 
    }
}