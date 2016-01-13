var app = angular.module('ionicApp');


app.controller('SignInCtrl', function ($scope, $state, $http, $window, $ionicPopup, $ionicLoading) {



    $scope.signIn = function (user) {

        $scope.show();

        var data = {
            email: user.email,
            password: user.password
        };
        //console.log(data);

        $http({
            method: 'POST',
            //url: 'http://conferencemanagement.herokuapp.com/register',
            url: 'http://localhost:8080/login',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            },
            params: data
        }).then(function successCallback(response) {
            if (response.data.success) {

                window.localStorage['token'] = response.data.token;
                window.localStorage['user'] = response.data.userdata;
                console.log(response.data.userdata);
                $state.go('home');
                $scope.hide();

            } else {
                $scope.hide();
                $ionicPopup.alert({
                    title: 'Try Again !!',
                    template: 'Username And Pass not did not match, try again'
                });
            }

        }, function errorCallback(response) {
            $scope.hide();

            $ionicPopup.alert({
                title: 'Try Again !!',
                template: 'Username And Pass not did not match n\ try again'
            });
            console.log(response);
        });
    }

    $scope.show = function () {
        $ionicLoading.show({
            template: 'Loading...'
        });
    };
    $scope.hide = function () {
        $ionicLoading.hide();
    };
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
    $scope.logout = function () {
        window.localStorage['token'] = '';
        window.localStorage['user'] = '';
        $state.go('signin');
    }


    console.log('home');

});

app.controller('showqrCtrl', function ($scope, $state, $http, $window, $cordovaBarcodeScanner) {
    $scope.string = 'nur farazi';

    $scope.sizee = window.screen.height;


    console.log('qr');

});


app.controller('registerCtrl', function ($scope, $state, $http, $window, $ionicPopup, $ionicLoading, Userfactory) {




    $scope.signinpage = function () {
        $state.go('signin');
    }

    $scope.registerbtn = function (user) {



        $scope.show();
        // $http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
        //console.log(user);
        var data = {
            name: user.name,
            password: user.password,
            address: user.address,
            email: user.email,
            phone: user.phone,
            companyname: user.companyname
        };
        //console.log(params);
        $http({
            method: 'POST',
            //url: 'http://conferencemanagement.herokuapp.com/register',
            url: 'http://localhost:8080/regi',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
            },
            params: data
        }).then(function successCallback(response) {
            if (response.status == 200) {
                //$state.go('signin');
                $scope.hide();

            } else {
                $scope.hide();
            }

        }, function errorCallback(response) {
            $scope.hide();

            $ionicPopup.alert({
                title: 'Try Again !!',
                template: 'Username And Pass not did not match n\ try again'
            });
            console.log(response);
        });
    }

    $scope.show = function () {
        $ionicLoading.show({
            template: 'Loading...'
        });
    };
    $scope.hide = function () {
        $ionicLoading.hide();
    };


    console.log('register');

});