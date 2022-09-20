import { LoyoutComponent } from './_loyout/loyout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { PagesRoutingModule } from './pages-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    LoyoutComponent
  ],
  imports: [
    MatDialogModule,
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    MatToolbarModule,
    
  ]
})
export class LoyoutModule { }
