myApp.controller('HomeController',['$scope', 'myFactory',  function($scope, myFactory){

    if(myFactory.get("text") !== 'undefined' && myFactory.get("text") !== null){
        $scope.notes = myFactory.get("text");
    } else {
        myFactory.set("text", "");
    }

    // check the model for changes
    $scope.$watch('notes',function(){
        myFactory.set("text",$scope.notes);
    });


}]);