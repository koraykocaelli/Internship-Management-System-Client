import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OgBilgiComponent } from './og-bilgi.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    OgBilgiComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "og-bilgi" ,component: OgBilgiComponent }
    ])
  ]
})
export class OgBilgiModule { }
