import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
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
    return this.http.get<NoteModel[]>('http://localhost:8000/notes', { headers: new HttpHeaders().set('authorization', '123') })
  }

  getSingleNote(todoId: string): Observable<NoteModel[]> {
    return this.http.get<NoteModel[]>(`http://localhost:8000/notes?noteId=${todoId}`)
  }
}
