import { Component } from '@angular/core';
import { TodosService } from "../../../services/todos.service";
import { NoteModel } from "../../../model/note.model";
import { Observable } from "rxjs";

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent {
  public todos$: Observable<NoteModel[]>;

  constructor(
    private todosService: TodosService,
  ) {
    this.todos$ = todosService.getTodos();
  }
}
