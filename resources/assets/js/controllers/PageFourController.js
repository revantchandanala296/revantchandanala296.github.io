myApp.controller('PageFourController',['$scope', 'myFactory', function($scope, myFactory){

    if(myFactory.get("textFour") !== 'undefined' && myFactory.get("textFour") !== null){
        $scope.notes = myFactory.get("textFour");
    } else {
        myFactory.set("textFour", "");
    }

    $scope.$watch('notes',function(){
        myFactory.set("textFour",$scope.notes);
    });

}]);