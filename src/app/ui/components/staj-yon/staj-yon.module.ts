import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StajYonComponent } from './staj-yon.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    StajYonComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "" , component: StajYonComponent}
    ])
  ]
})
export class StajYonModule { }
