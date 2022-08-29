import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUsersComponent } from './add-users/add-users.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { EditUsersComponent } from './edit-users/edit-users.component';

const routes: Routes = [
  {
    component: AddUsersComponent,
    path:'add'
  },
  {
    component: ViewUsersComponent,
    path:'view'
  },
  {
    component: EditUsersComponent,
    path:'edit/:id'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
