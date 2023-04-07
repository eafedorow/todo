import {Component, OnInit} from '@angular/core';
import {NoteModel} from "../../model/note.model";
import {ActivatedRoute} from "@angular/router";
import {TodosService} from "../../services/todos.service";

@Component({
  selector: 'app-note-page',
  templateUrl: './note-page.component.html',
  styleUrls: ['./note-page.component.scss']
})
export class NotePageComponent implements OnInit{
  note: NoteModel;
  todoId: string;
  isLoading: boolean

  constructor(
    private activatedRoute: ActivatedRoute,
    private todoService: TodosService
  ) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.activatedRoute.queryParams.subscribe(params => {
      this.todoId = params['todoId'];
    });

    this.todoService.getSingleNote(this.todoId).subscribe(
      (requestedNote) => {
        console.log(requestedNote[0].title)
        this.note = requestedNote[0]
      }
    )
    this.isLoading = false;
  }
}
