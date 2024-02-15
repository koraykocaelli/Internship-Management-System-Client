import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkPlaceInfoComponent } from './work-place-info.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    WorkPlaceInfoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", component: WorkPlaceInfoComponent}
    ])
  ]
})
export class WorkPlaceInfoModule { }
