import { UserDetailsComponent } from './user-details/user-details.component';
import { MaterialModule } from './../../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { UsersComponent } from './users/users.component';
import { NgChartsModule } from 'ng2-charts';
const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {path:'user-details', component: UserDetailsComponent},
      {path: 'users', component: UsersComponent },
    ]
  },

]
@NgModule({
  declarations: [
    UsersComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    MaterialModule,
    NgChartsModule
  ],
  exports: [RouterModule],
})
export class UserModule { }
