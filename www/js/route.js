var app = angular.module('ionicApp');

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('signin', {
            url: '/sign-in',
            templateUrl: 'templates/sign-in.html',
            controller: 'SignInCtrl'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl'
        })
        .state('showqr', {
            url: '/showqr',
            templateUrl: 'templates/showqr.html',
            controller: 'showqrCtrl'
        })

    $urlRouterProvider.otherwise('/sign-in');

});