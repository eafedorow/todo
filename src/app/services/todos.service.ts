import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(
    private http: HttpClient
  ) { }

  getTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts?id=0&id=1&id=2&id=3&id=4&id=5')
  }
}
