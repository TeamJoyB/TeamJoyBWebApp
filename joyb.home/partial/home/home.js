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
                }
            }
        });
    };

    $scope.joybCards = [
        {
            seeking: {
                id: 1,
                title: "SAP Business Objects",
                colorCode: "#E91E63",
                location: "Toronto",
                area: "GTA",
                tags: ["#WFH", "#remote", "#flexhours"],
                files: ["SAPBO"],
                payRange:{
                    min: 10000,
                    max: 20000
                }
            }
        },
        {
            posting: {
                id: 2,
                title: "Business Analyst",
                colorCode: "#3F51B5",
                location: "Ottawa",
                area: "Kanata",
                tags: ["#WFH", "#flexhours"],
                files: ["SAPBO"],
                payRange:{
                    min: 5000,
                    max: 20000
                }
            }
        }
    ];

});