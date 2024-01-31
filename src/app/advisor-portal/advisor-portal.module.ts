import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApLayoutModule } from './ap-layout/ap-layout.module';
import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ApLayoutModule,
    ComponentsModule
  ],
  exports: [
    ApLayoutModule
  ]
})
export class AdvisorPortalModule { }
