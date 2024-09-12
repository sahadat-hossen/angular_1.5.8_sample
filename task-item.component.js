(function() {
    'use strict';
  
    angular
      .module('myApp')
      .component('taskItem', {
        bindings: {
          task: '<',
          onRemove: '&',
          index: '<'
        },
        template: `
          <div class="task-item">
            <span ng-class="{completed: $ctrl.task.completed}">
              {{$ctrl.task.name}}
            </span>
            <button ng-click="$ctrl.remove()">Remove</button>
            <button ng-click="$ctrl.toggleComplete()">
              {{$ctrl.task.completed ? 'Undo' : 'Complete'}}
            </button>
          </div>
        `,
        controller: TaskItemController
      });
  
    function TaskItemController() {
      var vm = this;
  
      vm.remove = function() {
        vm.onRemove({index: vm.index});
      };
  
      vm.toggleComplete = function() {
        vm.task.completed = !vm.task.completed;
      };
    }
  })();
  