import { Component, OnInit } from '@angular/core';
import { TodosService } from "../../services/todos.service";
import {NoteModel} from "../../model/note.model";

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {
  todos: NoteModel[] = [];

  constructor(
    private todosService: TodosService
  ) {
  }

  ngOnInit() {
    this.todosService.getTodos().subscribe((data) => {
      this.todos = data;
    })
  }
}
