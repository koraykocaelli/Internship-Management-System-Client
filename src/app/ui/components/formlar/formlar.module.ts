import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlarComponent } from './formlar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FormlarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "", component: FormlarComponent}
    ])
  ]
})
export class FormlarModule { }
