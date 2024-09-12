(function() {
    'use strict';
  
    angular
      .module('myApp')
      .component('taskList', {
        template: `
          <div class="task-manager">
            <h1>Task Manager</h1>
            <form ng-submit="$ctrl.addTask()">
              <input type="text" ng-model="$ctrl.newTask" placeholder="Add a new task" required>
              <button type="submit">Add Task</button>
            </form>
            <ul>
              <li ng-repeat="task in $ctrl.tasks">
                <task-item task="task" on-remove="$ctrl.removeTask(index)" index="$index"></task-item>
              </li>
            </ul>
          </div>
        `,
        controller: TaskListController
      });
  
    TaskListController.$inject = ['TaskService'];
  
    function TaskListController(TaskService) {
      var vm = this;
  
      vm.tasks = TaskService.getTasks();
      vm.newTask = '';
  
      vm.addTask = function() {
        if (vm.newTask) {
          TaskService.addTask(vm.newTask);
          vm.newTask = '';
        }
      };
  
      vm.removeTask = function(index) {
        TaskService.removeTask(index);
      };
    }
  })();
  