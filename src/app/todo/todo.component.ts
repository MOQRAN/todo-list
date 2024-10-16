import { Component } from '@angular/core';
import { TodoService, Todo } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  newTodo: string = '';
  newCategory: string = 'Work';
  todos: Todo[] = [];
  filteredTodos: Todo[] = [];
  filterCategory: string = '';

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
    this.filteredTodos = this.todos;
  }

  addTodo() {
    if (this.newTodo.trim()) {
      this.todoService.addTodo(this.newTodo.trim(), this.newCategory);
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
}
