var app = angular.module('ionicApp');


app.controller('SignInCtrl', function ($scope, $state, $http, $window) {



    $scope.signIn = function () {
        $state.go('home');
    }

    console.log('signin');
});
app.controller('homeCtrl', function ($scope, $state, $http, $window) {




    console.log('home');

});