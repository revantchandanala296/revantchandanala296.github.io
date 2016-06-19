myApp.controller('PageFiveController',['$scope', 'myFactory', function($scope, myFactory){

    if(myFactory.get("textFive") !== 'undefined' && myFactory.get("textFive") !== null){
        $scope.notes = myFactory.get("textFive");
    } else {
        myFactory.set("textFive", "");
    }

    $scope.$watch('notes',function(){
        myFactory.set("textFive",$scope.notes);
    });

}]);