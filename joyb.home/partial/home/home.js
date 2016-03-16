angular.module('joyb.home').controller('HomeCtrl', function ($scope, $modal) {

    $scope.showCard = function (card) {
        $modal.open({
            animation: true,
            templateUrl:'/joyb.home/modal/joybCards/joybCards.html',
            controller: 'JoybcardsCtrl',
            resolve: {
                items: function () {
                    return card;
                }
            }
        });
    };

});