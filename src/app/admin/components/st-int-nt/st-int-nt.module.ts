import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StIntNtComponent } from './st-int-nt.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    StIntNtComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "" ,component: StIntNtComponent }
    ])
  ]
})
export class StIntNtModule { }
