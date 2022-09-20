import { UserModule } from './../../modules/user/user.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'user',
        component: UserModule,
      },
    ]),
  ],
})
export class DashboardModule { }
