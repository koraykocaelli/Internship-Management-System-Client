import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IgBelgeComponent } from './ig-belge.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    IgBelgeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "" , component: IgBelgeComponent}
    ])
  ]
})
export class IgBelgeModule { }
