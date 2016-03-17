angular.module('joyb.login', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('joyb.login').config(function($stateProvider) {

    /* Add New States Above */
    $stateProvider.state('login', {
        url:'/login',
        templateUrl:'/joyb.login/partial/login/login.html',
        controller:'LoginCtrl'
    });

});

