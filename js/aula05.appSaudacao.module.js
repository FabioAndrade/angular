/**
 * Created by fabio.andrade on 08/11/2016.
 */

var appSaudacao = angular.module('appSaudacao', []);

appSaudacao.filter('hello', function(){
    return function (nome) {
        return 'Olá ' + nome;
    }
});
