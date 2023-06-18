import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorComponent } from './component/author/author.component';
import { CreateEditComponent } from './component/author/create-edit/create-edit.component';
import { BookComponent } from './component/book/book.component';
import { CreateEditBookComponent } from './component/book/create-edit-book/create-edit-book.component';

const routes: Routes = [
  {
   path: 'authors', component: AuthorComponent, children: [
    {
      path: 'nuevo', component: CreateEditComponent
    },
    {
      path:'edicion/:id', component: CreateEditComponent
    }
   ]
  }
  ,
  {
    path: 'books', component: BookComponent, children: [
     {
       path: 'nuevo', component: CreateEditBookComponent
     }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
