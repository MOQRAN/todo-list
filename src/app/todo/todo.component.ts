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
  ],
})
export class TodoComponent {
  newTodo: string = '';
  newCategory: string = 'Work';
  dueDate: string = '';
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
      this.todoService.addTodo(this.newTodo.trim(), this.newCategory,this.dueDate);
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
}
