angular.module('case-management')

.config(function($stateProvider) {
  $stateProvider.state('dashboard.home', {
    url: '/home',
    views: {
      "content": {
        controller: 'HomeCtrl',
        templateUrl: 'dashboard/home/home.tpl.html'
      }
    },
    data: { pageTitle: 'Home' },
    restricted: true
  });
})

.controller('HomeCtrl', function($rootScope, $scope, $q, CaseManagementApi, AuthService, $state, $timeout) {
});