angular.module('joyb.home').controller('JoybcardsCtrl', function ($scope, $modal, items, action) {
    $scope.scopeVariable = {
        "options": {
            label: "Choose a color",
            icon: "brush",
            default: "#f00",
            genericPalette: false,
            history: false
        }
    };
    if (action === 'show') {
        $scope.joybCard = items;
        console.log($scope.joybCard);
    } else {
        $scope.joybCard = {
            tags: [],
            files: [],
            payRange: {
                min: 0,
                max: 0
            }
        };
    }

    $scope.cardTypes = [
        "Seeking", "Posting"
    ];

    $scope.toggle = function (item) {
        console.log(item);
        $scope.joybCard.type = item;
    };
    $scope.exists = function (type, value) {
        return type === value;
    };

    $scope.addTags = function (tags) {
        console.log(tags);

        $modal.open({
            templateUrl: 'joyb.common/modal/m-tag/m-tag.html',
            controller: 'MTagCtrl',
            resolve: {
                tags: function () {
                    return tags;
                }
            }
        }).result.then(function (result) {
            //do something with the result
        });
    };

    $scope.addFiles = function (files) {
        $modal.open({
            templateUrl: 'joyb.common/modal/m-files/m-files.html',
            controller: 'MFilesCtrl',
            resolve: {
                files: function () {
                    return files;
                }
            }
        }).result.then(function (result) {
            //do something with the result
        });
    };

    $scope.addRange = function (payRange) {
        $modal.open({
            templateUrl: 'joyb.common/modal/m-range/m-range.html',
            controller: 'MRangeCtrl',
            resolve: {
                payRange: function () {
                    return payRange;
                }
            }
        }).result.then(function (result) {
            //do something with the result
            console.log(result);
        });
    };
});