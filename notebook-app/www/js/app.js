var myApp=angular.module("notebook-app",["ui.router"]);myApp.config(["$stateProvider","$urlRouterProvider",function(e,t){t.otherwise("/"),e.state("home",{url:"/",templateUrl:"www/pages/home.html",controller:"HomeController"}).state("page2",{url:"/page-2",templateUrl:"www/pages/page2.html",controller:"PageTwoController"}).state("page3",{url:"/page-3",templateUrl:"www/pages/page3.html",controller:"www/PageThreeController"}).state("page4",{url:"/page-4",templateUrl:"www/pages/page4.html",controller:"PageFourController"}).state("page5",{url:"/page-5",templateUrl:"www/pages/page5.html",controller:"PageFiveController"})}]),myApp.factory("myFactory",function(){function e(e,t){sessionStorage.setItem(e,t)}function t(e){return sessionStorage.getItem(e)}var o={set:e,get:t};return o}),myApp.directive("swipeGesture",["$location",function(e){return{restrict:"A",scope:{right:"@",left:"@"},link:function(t,o,r){Hammer(o[0]).on("swiperight",function(){e.url(t.right),t.$apply()}),Hammer(o[0]).on("swipeleft",function(){e.url(t.left),t.$apply()})}}}]),myApp.controller("HomeController",["$scope","myFactory",function(e,t){"undefined"!==t.get("text")&&null!==t.get("text")?e.notes=t.get("text"):t.set("text",""),e.$watch("notes",function(){t.set("text",e.notes)})}]),myApp.controller("PageFiveController",["$scope","myFactory",function(e,t){"undefined"!==t.get("textFive")&&null!==t.get("textFive")?e.notes=t.get("textFive"):t.set("textFive",""),e.$watch("notes",function(){t.set("textFive",e.notes)})}]),myApp.controller("PageFourController",["$scope","myFactory",function(e,t){"undefined"!==t.get("textFour")&&null!==t.get("textFour")?e.notes=t.get("textFour"):t.set("textFour",""),e.$watch("notes",function(){t.set("textFour",e.notes)})}]),myApp.controller("PageThreeController",["$scope","myFactory",function(e,t){"undefined"!==t.get("textThree")&&null!==t.get("textThree")?e.notes=t.get("textThree"):t.set("textThree",""),e.$watch("notes",function(){t.set("textThree",e.notes)})}]),myApp.controller("PageTwoController",["$scope","myFactory",function(e,t){"undefined"!==t.get("textTwo")&&null!==t.get("textTwo")?e.notes=t.get("textTwo"):t.set("textTwo",""),e.$watch("notes",function(){t.set("textTwo",e.notes)})}]);