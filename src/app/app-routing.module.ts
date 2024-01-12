import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotebookPageComponent } from "./pages/notebook-page/notebook-page.component";
import { NotePageComponent } from "./pages/note-page/note-page.component";

const routes: Routes = [
  {
    path: '',
    title: 'Главная - ваши заметки',
    loadChildren: () => import('./pages/main-page/main-page.module').then(m => m.MainPageModule)
  },
  {
    path: 'note',
    title: 'Заметка',
    component: NotePageComponent
  },
  {
    path: 'notebook',
    title: 'Ваши блокноты',
    component: NotebookPageComponent
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
