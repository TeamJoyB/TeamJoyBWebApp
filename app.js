angular.module('teamJoYbWebApp', [
    'ui.bootstrap', 
    'ui.utils', 
    'ui.router', 
    'ngAnimate',
    'ngMaterial', 
    'joyb.home', 
    'joyb.login', 
    'joyb.common']);

angular.module('teamJoYbWebApp').config(function($stateProvider, $urlRouterProvider, $mdThemingProvider) {

    /* Add New States Above */
    $urlRouterProvider.otherwise('/home');
    
    $mdThemingProvider.theme('default')
    .primaryPalette('orange')
    .accentPalette('indigo');

});

angular.module('teamJoYbWebApp').run(function($rootScope) {

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

});
