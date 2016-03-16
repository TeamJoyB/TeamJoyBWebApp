angular.module('joyb.home', ['ui.bootstrap', 'ui.utils', 'ui.router', 'ngAnimate']);

angular.module('joyb.home').config(function ($stateProvider) {

    /* Add New States Above */
    $stateProvider.state('home', {
        url:'/home',
        templateUrl:'/joyb.home/partial/home/home.html',
        controller:'HomeCtrl'
    });

});

