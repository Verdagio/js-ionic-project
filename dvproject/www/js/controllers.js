angular.module('starter.controllers', [])

.controller('TodoCtrl', function($scope, Task) {
    
    $scope.data = "";
    
    $scope.remove = function(x){
      Task.remove(x);

    };
    

    $scope.items = Task.data.tasks;
    $scope.show;

})

.controller('CreateCtrl', function($scope, Task) {    
    $scope.data = { title: "", 
                    details: ""};
    $scope.addTask = function(){
        Task.addTask($scope.data.title, $scope.data.details);
        // Set the text boxes to blank once clicked
        $scope.data.title = "";
        $scope.data.details = "";
    };
    
    

})

