import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpHeaderComponent } from './sp-header/sp-header.component';
import { SpSidebarComponent } from './sp-sidebar/sp-sidebar.component';
import { SpFooterComponent } from './sp-footer/sp-footer.component';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    SpHeaderComponent,
    SpSidebarComponent,
    SpFooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule
  ],
  exports: [
    SpHeaderComponent,
    SpSidebarComponent,
    SpFooterComponent
  ]
})
export class ComponentsModule { }
