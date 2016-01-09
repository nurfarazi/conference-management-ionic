var app = angular.module('ionicApp');


app.controller('SignInCtrl', function ($scope, $state, $http, $window) {



    $scope.signIn = function () {
        $state.go('home');
    }
    $scope.registrationclick = function () {
        $state.go('register');
    }

    console.log('signin');
});
app.controller('homeCtrl', function ($scope, $state, $http, $window, $cordovaBarcodeScanner) {


    $scope.scancode = function () {

        $cordovaBarcodeScanner.scan().then(function (imageData) {
            alert(imageData.text);
            console.log("Barcode Format -> " + imageData.format);
            console.log("Cancelled -> " + imageData.cancelled);
        }, function (error) {
            console.log("An error happened -> " + error);
        });

    }
    $scope.showqr = function () {

        $state.go('showqr');

    }

    console.log('home');

});

app.controller('showqrCtrl', function ($scope, $state, $http, $window, $cordovaBarcodeScanner) {
    $scope.string = 'nur farazi';

    $scope.sizee = window.screen.height;


    console.log('qr');

});


app.controller('registerCtrl', function ($scope, $state, $http, $window) {

    $scope.signinpage = function () {

        $state.go('signin');

    }


    console.log('register');

});