import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {NoteModel} from "../model/note.model";

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(
    private http: HttpClient
  ) { }

  getTodos(): Observable<NoteModel[]> {
    return this.http.get<NoteModel[]>('http://localhost:3000/notes')
  }

  getSingleNote(todoId: string): Observable<NoteModel[]> {
    return this.http.get<NoteModel[]>(`http://localhost:3000/notes?noteId=${todoId}`)
  }
}
