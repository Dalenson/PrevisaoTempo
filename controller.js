(function (){
    'use strict';

    angular
    .module('app')
    .controller('TempoController', TempoController);

    /*TempoController.$inject = [
        'TempoService',
        '$scope'
    ];*/

    function TempoController(){
        console.log('foi')
    }
})