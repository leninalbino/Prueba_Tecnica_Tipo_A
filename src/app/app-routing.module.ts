import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren: () =>
      import('./pages/loyout.module').then((m) => m.LoyoutModule),
  },
  {
      path: '**',
      redirectTo: 'user',
      pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
