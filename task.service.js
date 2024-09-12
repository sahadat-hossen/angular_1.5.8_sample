(function() {
    'use strict';
  
    angular
      .module('myApp')
      .service('TaskService', TaskService);
  
    function TaskService() {
      var tasks = [
        {name: 'Task 1', completed: false},
        {name: 'Task 2', completed: true},
        {name: 'Task 3', completed: false}
      ];
  
      this.getTasks = function() {
        return tasks;
      };
  
      this.addTask = function(taskName) {
        tasks.push({name: taskName, completed: false});
      };
  
      this.removeTask = function(index) {
        tasks.splice(index, 1);
      };
    }
  })();
  