/**
 * Created by fabio.andrade on 10/11/2016.
 */

app.controller('aula07Controller', function ($scope) {
    $scope.nomes = [];
    
    $scope.addNome = function (nome) {
        $scope.nomes.push(nome);
    }
});
