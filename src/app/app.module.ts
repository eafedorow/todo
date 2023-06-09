import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxsModule } from '@ngxs/store';

import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatButtonModule } from "@angular/material/button";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TodosListComponent } from './components/todos-list/todos-list.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { NotebookPageComponent } from './pages/notebook-page/notebook-page.component';
import { NotePageComponent } from './pages/note-page/note-page.component';
import { UserLinkComponent } from './components/user-link/user-link.component';



@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NotebookPageComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    TodosListComponent,
    TodoItemComponent,
    NotePageComponent,
    UserLinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxsModule,
    MatIconModule,
    HttpClientModule,
    MatMenuModule,
    MatTooltipModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
