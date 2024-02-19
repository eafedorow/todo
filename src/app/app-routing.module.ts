import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotebookPageComponent } from "./pages/notebook-page/notebook-page.component";
import { NotePageComponent } from "./pages/note-page/note-page.component";
import { MainPageComponent } from "./pages/main-page/main-page.component";
import { AuthPageComponent } from "./pages/auth-page/auth-page.component";
import { AuthGuard } from "./guards/auth.guard";
import {ProfilePageComponent} from "./pages/profile-page/profile-page.component";

const routes: Routes = [
  {
    path: '',
    title: 'Главная - ваши заметки',
    component: MainPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'auth',
    title: 'Авторизация',
    component: AuthPageComponent
  },
  {
    path: 'note',
    title: 'Заметка',
    component: NotePageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'notebook',
    title: 'Ваши блокноты',
    component: NotebookPageComponent,
    canActivate: [AuthGuard]
  },
  {
  path: 'profile',
  title: 'Ваши профиль',
  component: ProfilePageComponent,
  canActivate: [AuthGuard]
},
  {
    path: '**',
    redirectTo: 'notebook'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
