import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnaybOgComponent } from './onayb-og.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    OnaybOgComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "" ,component: OnaybOgComponent}
    ])
  ]
})
export class OnaybOgModule { }
