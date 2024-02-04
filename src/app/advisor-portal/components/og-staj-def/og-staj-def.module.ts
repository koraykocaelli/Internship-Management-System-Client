import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OgStajDefComponent } from './og-staj-def.component';



@NgModule({
  declarations: [
    OgStajDefComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "" ,component: OgStajDefComponent }
    ])
  ]
})
export class OgStajDefModule { }
