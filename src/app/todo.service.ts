import { Injectable } from '@angular/core';

export interface Todo {
  task: string;
  category: string;
  dueDate:string,
  completed: boolean,
  priority: string;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [];

  constructor() {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      this.todos = JSON.parse(savedTodos);
    }
  }

  getTodos() {
    return this.todos.sort((a, b) => this.comparePriority(a.priority, b.priority));
  }
  comparePriority(a: string, b: string): number {
    const priorityMap: { [key: string]: number } = { 'High': 1, 'Medium': 2, 'Low': 3 };
    return priorityMap[a as keyof typeof priorityMap] - priorityMap[b as keyof typeof priorityMap];
  }

  addTodo(task: string, category: string,dueDate:string, priority: string) {
    this.todos.push({ task, category,dueDate, completed:false,priority});
    this.todos.sort((a, b) => new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime());
    this.saveTodos();
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
    this.saveTodos();
  }
  saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
  toggleCompletion(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
    this.saveTodos();
  }

  getTodosByCategory(category: string) {
    return this.todos.filter(todo => todo.category === category);
  }
}
