import { NgModule } from "@angular/core";
import { MaterialModule } from "./modules/material";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { TodosListComponent } from "./components/todos-list/todos-list.component";
import { TodoItemComponent } from "./components/todo-item/todo-item.component";
import { CommonModule } from "@angular/common";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import {UserLinkComponent} from "./components/user-link/user-link.component";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule
  ],
  declarations: [
    HeaderComponent,
    SidebarComponent,
    UserLinkComponent,
    FooterComponent,
    TodosListComponent,
    TodoItemComponent
  ],
  exports: [
    MaterialModule,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    UserLinkComponent,
    TodosListComponent,
  ],
})
export class SharedModule { }
