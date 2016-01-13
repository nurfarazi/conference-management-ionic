angular.module('ionicApp')

.factory('Userfactory', function ($resource) {


    return $resource('http://localhost:8080/regi');
});