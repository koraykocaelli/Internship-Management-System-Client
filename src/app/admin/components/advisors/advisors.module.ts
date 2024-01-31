import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvisorsComponent } from './advisors.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdvisorsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: AdvisorsComponent}
    ])
  ]
})
export class AdvisorsModule { }
