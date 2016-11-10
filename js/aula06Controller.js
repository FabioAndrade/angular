/**
 * Created by fabio.andrade on 10/11/2016.
 */

app.controller('aula06Controller', function($scope) {
    $scope.nome = "Curso AngularJS";

    $scope.olaMundo = function(nome) {
        alert("Olá " + nome);
    }
});