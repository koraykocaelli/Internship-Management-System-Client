import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApLayoutComponent } from './ap-layout.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [
    ApLayoutComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,
    MatSidenavModule
  ],
  exports: [
    ApLayoutComponent
  ]
})
export class ApLayoutModule { }
