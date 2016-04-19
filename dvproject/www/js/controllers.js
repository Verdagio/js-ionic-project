angular.module('starter.controllers', [])

.controller('TodoCtrl', function($scope, Task) {
    
    $scope.info = "";
    
    $scope.remove = function(x){
      Task.remove(x);
        if($scope.items.length == 0){
            $scope.info = "No Tasks left!"; 
        }
    };
    

    $scope.items = Task.data.tasks;
    $scope.show;
    

})

.controller('CreateCtrl', function($scope, Task) {
    $scope.add = function(x){
        Task.addTask(x);
    };
    
    $scope.items = Task.data.tasks;
})

.controller('HowToCtrl', function($scope) {

});
