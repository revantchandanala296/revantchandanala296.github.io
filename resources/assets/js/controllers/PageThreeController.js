myApp.controller('PageThreeController',['$scope', 'myFactory', function($scope, myFactory){

    if(myFactory.get("textThree") !== 'undefined' && myFactory.get("textThree") !== null){
        $scope.notes = myFactory.get("textThree");
    } else {
        myFactory.set("textThree", "");
    }

    $scope.$watch('notes',function(){
        myFactory.set("textThree",$scope.notes);
    });

}]);
