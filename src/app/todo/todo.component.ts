import { Component } from '@angular/core';
import { TodoService, Todo } from '../todo.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations: [
    trigger('taskState', [
      state('void', style({ opacity: 0 })),
      transition(':enter', [animate('300ms ease-in', style({ opacity: 1 }))]),
      transition(':leave', [animate('300ms ease-out', style({ opacity: 0 }))]),
    ]),
    trigger('taskAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0, transform: 'translateY(-20px)' }))
      ])
    ]),
    trigger('dropdownAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-out', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ])
  ],
})
export class TodoComponent {
  newTodo: string = '';
  newCategory: string = 'Work';
  dueDate: string = '';
  newPriority: string = 'Low';
  todos: Todo[] = [];
  filteredTodos: Todo[] = [];
  filterCategory: string = '';

  editingIndex: number | null = null;
  editedTask: string = '';



  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
    this.filteredTodos = this.todos;
  }

  addTodo() {
    if (this.newTodo.trim()) {
      this.todoService.addTodo(this.newTodo.trim(), this.newCategory,this.dueDate,this.newPriority);
      this.newTodo = '';
      this.filterTodos();
    }
  }

  deleteTodo(index: number) {
    this.todoService.deleteTodo(index);
    this.filterTodos();
  }

  filterTodos() {
    if (this.filterCategory) {
      this.filteredTodos = this.todoService.getTodosByCategory(this.filterCategory);
    } else {
      this.filteredTodos = this.todos;
    }
  }
  isOverdue(dueDate: string): boolean {
    return new Date(dueDate).getTime() < new Date().getTime();
  }
  editTask(index: number, currentTask: string) {
    this.editingIndex = index;
    this.editedTask = currentTask;
  }

  saveTask(index: number) {
    if (this.editedTask.trim()) {
      this.todos[index].task = this.editedTask.trim();
      this.editingIndex = null;
      this.todoService.saveTodos();
    }
  }
  getCompletedTasks(): number {
    return this.todos.filter(todo => todo.completed).length;
  }
  getProgressPercentage(): number {
    const completedTasks = this.getCompletedTasks();
    return this.todos.length > 0 ? (completedTasks / this.todos.length) * 100 : 0;
  }

toggleCompletion(index: number) {
  this.todoService.toggleCompletion(index);
  // this.todos = this.todoService.getTodos();
}
}
