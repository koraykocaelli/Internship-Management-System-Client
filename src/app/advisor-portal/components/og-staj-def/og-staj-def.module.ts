import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OgStajDefComponent } from './og-staj-def.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    OgStajDefComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "og-staj-def" ,component: OgStajDefComponent }
    ])
  ]
})
export class OgStajDefModule { }
