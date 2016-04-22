angular.module('starter.services',[/*$localStorage*/])
//ref - https://github.com/mobile-applications-development/solution-factory
.factory('Task', function() {
  //$scope.$storage = $localStorage;
    
    //$store.taskname = saveData;
    
  var data = {
    tasks: [
        {title: "Clean the house", 
        details: "Mop, hoover, dust",
        added: new Date(),
        id: 0}, 
        {title: "Bring car to garage", 
        details: "123 Something Road, Earth.", 
        added: new Date(),
        id: 1}
    ]
      //$store.taskname = data.title;
  };

    
    function addTask(title, details) {
    data.tasks.push({title: title, details: details, added: new Date()});
  }
    
  return {   
    data: data
    , addTask: addTask,
    //ref splice - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    remove: function(id) {
        data.tasks.splice(data.tasks.indexOf(id), 1);
    }
  };
});
