angular.module('joyb.common').controller('MRangeCtrl', function ($scope, $modalInstance, payRange, $timeout) {

    console.log(payRange);

    $scope.broadcast = function () {
        $timeout(function () {
            $scope.$broadcast('reCalcViewDimensions');
        });
    };
    
    $scope.broadcast();

    $scope.payRange = payRange;

    $scope.slider = {
        min: $scope.payRange.min,
        max: $scope.payRange.max,
        options: {
            floor: 0,
            ceil: 200000
        }
    };

    $scope.saveRange = function () {
        $scope.payRange.min = $scope.slider.min;
        $scope.payRange.max = $scope.slider.max;

        $modalInstance.close($scope.payRange);
    };
});