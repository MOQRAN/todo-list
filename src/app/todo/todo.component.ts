import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  newTodo: string = '';
  todos: string[] = [];

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }

  addTodo() {
    if (this.newTodo.trim()) {
      this.todoService.addTodo(this.newTodo.trim());
      this.newTodo = '';
    }
  }

  deleteTodo(index: number) {
    this.todoService.deleteTodo(index);
  }
}
