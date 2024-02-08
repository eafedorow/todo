import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {
  catchError,
  map,
  Observable,
  of
} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000'
  constructor(private http: HttpClient) { }

  public login(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password })
      .pipe(
        map(response => {
          console.log(response);
          localStorage.setItem('token', 'true');
          return true
        }),
        catchError(error => {
          console.error('Ошибка авторизации', error);
          return of(false);
        })
      );
  }

  public logout(): void {
    localStorage.removeItem('token');
  }

  public isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
