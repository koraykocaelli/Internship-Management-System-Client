import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { SpLayoutModule } from './sp-layout/sp-layout.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SpLayoutModule,
    ComponentsModule
  ],
  exports: [
    SpLayoutModule
  ]
})
export class StudentPortalModule { }
