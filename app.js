angular.module('teamJoYbWebApp', [
    'ui.bootstrap', 
    'ui.utils', 
    'ui.router', 
    'ngAnimate', 
    'ngMaterial', 
    'rzModule',
    'joyb.home', 
    'joyb.login', 
    'joyb.common', 
    'joyb.list'
    ]);

angular.module('teamJoYbWebApp').config(function($stateProvider, $urlRouterProvider, $mdThemingProvider) {

    /* Add New States Above */
    $urlRouterProvider.otherwise('/login');
    
    $mdThemingProvider.theme('default')
    .primaryPalette('orange')
    .accentPalette('indigo');

});

angular.module('teamJoYbWebApp').run(function($rootScope, $state) {
    
    $rootScope.LoginText = "Login";

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };
    
    $rootScope.goToHome = function(){
      $state.go('home');  
    };

});
