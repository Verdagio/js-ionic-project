angular.module('starter.services', [])

.factory('Task', function() {
  
  var data = {
    tasks: [
      {title: "Buy groceries", details: "Milk, Bread, Butter", added: new Date(), id: 0}
      , {title: "Clean dog", details: "He stinks!", added: new Date(), id: 1}
    ]
  };

    
    function addTask(title) {
    data.tasks.push({title: title, added: new Date()});
  }
  
  return {
    data: data
    , addTask: addTask,
    remove: function(id) {
        data.tasks.splice(data.tasks.indexOf(id), 1);
    }
  };
});
   /* 
    return {
      remove: function(id) {
          data.tasks.splice(data.tasks.indexOf(id), 1);
      },
      }
        
    };
    
  return {
    remove: function(id) {
      data.tasks.splice(data.tasks.indexOf(id), 1);
    },
  function: addTask(id) {
    data.tasks.push({title: title, added: new Date()});
  },
    data: data,
    , addTask: addTask
  };*/
