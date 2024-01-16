
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

//ANGULAR MATERIAL
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { TodoSignalsService } from 'src/app/services/todo-signals.service';
import { Todo } from 'src/app/models/model/todo.model';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HeaderComponent } from '../header/header.component';



@Component({
  selector: 'app-todo-from',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatButtonModule, MatCardModule, MatInputModule, MatDialogModule],
  templateUrl: './todo-from.component.html',
  styleUrls: ['./todo-from.component.scss']
})
export class TodoFromComponent {
  todoSignalsService = inject(TodoSignalsService); //INJETANDO SERVIÇO
  private dialogRefService = inject(MatDialogRef<HeaderComponent>);
  allTodos = this.todoSignalsService.todosState();

  todosForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    description: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  handleCreateNewTodo(): void {
    if (this.todosForm.valid) {
      const title = String(this.todosForm.controls['title'].value);
      const description = String(this.todosForm.controls['description'].value);
      const id = this.allTodos.length > 0 ? this.allTodos.length + 1 : 1;
      const done = false;

      this.todoSignalsService.updateTodos({id, title, description, done});
      this.dialogRefService.close();
    }
  }

  handleCloseModal(): void {
    this.dialogRefService.close();
  }
}
