import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StajDefComponent } from './staj-def.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    StajDefComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "" , component: StajDefComponent}
    ])
  ]
})
export class StajDefModule { }
