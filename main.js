angular.module('portfolio2App', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider)
{
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state(
    'home',
    {
        url:'/',
        templateUrl:'views/welcome-section.html'
    })

    .state('school',
    {
        url:'/school',
        templateUrl:'views/school.html'
    })
    ;
}]);
