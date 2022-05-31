angular
.module('app')
.controller('TempoController', TempoController);

TempoController.$inject = [
    '$scope',
    'TempoService',
];

function TempoController($scope, TempoService){
    
    function teste(){
        console.log('teste');
    }
}
