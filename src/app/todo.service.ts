import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: string[] = [];

  constructor() {}

  getTodos() {
    return this.todos;
  }

  addTodo(todo: string) {
    this.todos.push(todo);
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
