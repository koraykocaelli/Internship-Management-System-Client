import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpLayoutComponent } from './sp-layout.component';
import { RouterModule } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ComponentsModule } from './components/components.module';



@NgModule({
    declarations: [
        SpLayoutComponent,
    ],
    imports: [
        CommonModule,
        ComponentsModule,
        RouterModule,
        MatSidenavModule,
    ],
    exports: [
        SpLayoutComponent
    ],

})
export class SpLayoutModule { }
