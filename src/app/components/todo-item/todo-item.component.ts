import { Component, Input } from '@angular/core';
import {NoteModel} from "../../model/note.model";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent  {
  @Input() todo: NoteModel
}
