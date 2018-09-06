angular.module('odmsApp', [
    'ngAnimate',
    'ngSanitize',
    'ui.tinymce',
    'templates-app',
    'templates-common',
    'ui.router',
    'ui.select',
    'ui.bootstrap',
    'infinite-scroll',
    'dndLists',
    'ui-notification',
    'satellizer',
    'vcRecaptcha',
    'oc.lazyLoad'
])
.config(function($stateProvider, $urlRouterProvider, $httpProvider){
    $urlRouterProvider.otherwise(function($injector, $location, $stateParams) {
        var $state = $injector.get('$state');
        if ($location.path().indexOf('access_token') === -1) {
          $state.go('login');
        }
    });
})
.run(function($document, $rootScope) {
    // $document.on('click', function(event) {
    //   $rootScope.$apply(function() {
    //     $rootScope.$broadcast('documentClicked', event);
    //   });
    // });
})
.controller('AppCtrl', function($rootScope, $scope, $location, $state, $q){
    alert('hellow App Ctrl');
});