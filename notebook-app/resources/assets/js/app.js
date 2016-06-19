
var myApp = angular.module('notebook-app', ['ui.router']);

myApp.config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'www/pages/home.html',
            controller: 'HomeController'
        })
        .state('page2', {
            url:'/page-2',
            templateUrl: 'www/pages/page2.html',
            controller: 'PageTwoController'
        })
        .state('page3', {
            url: '/page-3',
            templateUrl: 'www/pages/page3.html',
            controller: 'www/PageThreeController'
        })
        .state('page4', {
            url: '/page-4',
            templateUrl: 'www/pages/page4.html',
            controller: 'PageFourController'
        })
        .state('page5',{
            url: '/page-5',
            templateUrl: 'www/pages/page5.html',
            controller: 'PageFiveController'
        });

}]);

/* This is a service which can be injected into any controller. It has get and set functions for session storage */

myApp.factory('myFactory', function() {

    var notesData = {
        set: set,
        get: get
    };

    function set(key, value) {
        sessionStorage.setItem(key, value)
    }

    function get(key) {
        return sessionStorage.getItem(key);
    }

    return notesData;

});

/* This is a custom directive to swipe left and right */

myApp.directive('swipeGesture', ['$location', function($location){
    return{
        restrict: 'A',
        scope:{
            right: '@',
            left: '@'
        },
        link: function(scope, element, attrs){
            Hammer(element[0]).on("swiperight", function(){
                $location.url(scope.right);
                scope.$apply();
            });

            Hammer(element[0]).on("swipeleft", function(){
                $location.url(scope.left);
                scope.$apply();
            });
        }
    };

}]);


