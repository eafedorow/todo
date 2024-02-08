import { Component } from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  public isLoggedIn: boolean;
  constructor(private authService: AuthService) {
    this.isLoggedIn = authService.isLoggedIn();
  }
}
