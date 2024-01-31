import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApHeaderComponent } from './ap-header/ap-header.component';
import { ApSidebarComponent } from './ap-sidebar/ap-sidebar.component';
import { ApFooterComponent } from './ap-footer/ap-footer.component';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    ApHeaderComponent,
    ApSidebarComponent,
    ApFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule
  ],
  exports: [
    ApHeaderComponent,
    ApSidebarComponent,
    ApFooterComponent  
  ]
})
export class ComponentsModule { }
