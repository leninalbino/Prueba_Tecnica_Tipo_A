import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoyoutComponent } from './_loyout/loyout.component';


const routes: Routes = [
  {path: '',
    component: LoyoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'user/users',
        pathMatch: 'full'
      },
      {
        path: 'home',

        loadChildren: () =>
          import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path:'user',
        loadChildren:() =>
        import('../modules/user/user.module').then((m) => m.UserModule),
      }

    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
