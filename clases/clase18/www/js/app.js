// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('main', {
        url: "/main",
        abstract:true,
        templateUrl: "templates/layout.html"
    });

    $stateProvider.state('main.home', {
        url: "/home",
        views:{
          contenedorUno:{
            templateUrl: "templates/home.html",
            controller:'HomeCtrl'
          }
        }
    });

    $stateProvider.state('main.buscador', {
        url: "/buscador",
        views:{
          contenedorDos:{
            templateUrl: "templates/buscador.html",
            controller:'BuscadorCtrl'
          }
        }
    });

    $urlRouterProvider.otherwise('/main/home');

});