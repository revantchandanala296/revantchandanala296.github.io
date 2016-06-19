myApp.controller('PageTwoController',['$scope', 'myFactory', function($scope, myFactory){

    if(myFactory.get("textTwo") !== 'undefined' && myFactory.get("textTwo") !== null){
        $scope.notes = myFactory.get("textTwo");
    } else {
        myFactory.set("textTwo", "");
    }

    $scope.$watch('notes',function(){
        myFactory.set("textTwo",$scope.notes);
    });

}]);