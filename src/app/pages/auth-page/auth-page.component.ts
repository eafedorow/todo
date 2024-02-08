import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../../shared/modules/material";

@Component({
  selector: 'app-auth-page',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule
  ],
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss'],
  providers: []
})
export class AuthPageComponent {

}
