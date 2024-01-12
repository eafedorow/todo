import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NgxsModule } from '@ngxs/store';
import { MainState } from "./store/main.state";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NotebookPageComponent } from './pages/notebook-page/notebook-page.component';
import { NotePageComponent } from './pages/note-page/note-page.component';
import { ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "./shared";
import { MainPageModule } from "./pages/main-page/main-page.module";

@NgModule({
  declarations: [
    AppComponent,
    NotebookPageComponent,
    NotePageComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([
      MainState
    ]),
    ReactiveFormsModule,
    SharedModule,
    MainPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
