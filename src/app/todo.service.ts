import { Injectable } from '@angular/core';

export interface Todo {
  task: string;
  category: string;
  dueDate:string
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];

  getTodos() {
    return this.todos;
  }

  addTodo(task: string, category: string,dueDate:string) {
    this.todos.push({ task, category,dueDate });
    this.todos.sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }

  getTodosByCategory(category: string) {
    return this.todos.filter(todo => todo.category === category);
  }
}
