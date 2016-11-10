/**
 * Created by fabio.andrade on 10/11/2016.
 */

app.controller('countController', function($scope) {
    $scope.counter = 0;

    $scope.addOne = function () {
        $scope.counter++;
    }
});
