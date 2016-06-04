angular.module('joyb.home').controller('HomeCtrl', function ($scope, $modal, $rootScope) {

    $rootScope.LoginText = "Sign Out";


    $scope.showCard = function (card) {
        $modal.open({
            animation: true,
            templateUrl: '/joyb.home/modal/joybCards/joybCards.html',
            controller: 'JoybcardsCtrl',
            resolve: {
                items: function () {
                    return card;
                },
                action:function(){
                    return 'show';
                }
            }
        });
    };

    $scope.addCard = function () {
        $modal.open({
            animation: true,
            templateUrl: '/joyb.home/modal/joybCards/joybCards.html',
            controller: 'JoybcardsCtrl',
            resolve: {
                items: function () {
                    return [];
                },
                action:function(){
                    return 'add';
                }
            }
        }).result.then(function(result) {
            //do something with the result
            $scope.joybCards.push(result);
        });
    };

    $scope.joybCards = [
        /*{
            id: 1,
            type: "Seeking",
            title: "SAP Business Objects",
            colorCode: "#E91E63",
            location: "Toronto",
            area: "GTA",
            tags: ["#WFH", "#remote", "#flexhours"],
            files: ["SAPBO"],
            payRange: {
                min: 10000,
                max: 20000
            }
        },
        {
            id: 2,
            type: "Posting",
            title: "Business Analyst",
            colorCode: "#3F51B5",
            location: "Ottawa",
            area: "Kanata",
            tags: ["#WFH", "#flexhours"],
            files: ["SAPBO"],
            payRange: {
                min: 5000,
                max: 20000
            }
        }*/
    ];

});