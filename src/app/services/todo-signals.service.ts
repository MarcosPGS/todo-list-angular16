import { Injectable, signal } from '@angular/core';
import { Todo } from '../models/model/todo.model';
import { TodoKeyLocalStorage } from '../models/enum/todoKeyLocalStorage';

@Injectable({
  providedIn: 'root'
})
export class TodoSignalsService {
  todosState = signal<Todo[]>([]);

  updateTodos({id,title, description, done}: Todo): void {
    if ((id && title && description !== null) || undefined) {
      this.todosState.mutate((todo) =>{
        if (todo !== null) {
          todo.push(new Todo(id,title, description, done));
        }
      });
      this.saveTodosInLocalStorage();
    }
  }

  saveTodosInLocalStorage(): void {
    const todos = JSON.stringify(this.todosState());
    todos && localStorage.setItem(TodoKeyLocalStorage.TODO_LIST, todos)
  }
}
