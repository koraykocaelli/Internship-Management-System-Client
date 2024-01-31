import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OgBilgiModule } from './og-bilgi/og-bilgi.module';
import { OgStajDefModule } from './og-staj-def/og-staj-def.module';
import { OnaybOgModule } from './onayb-og/onayb-og.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OgBilgiModule,
    OgStajDefModule,
    OnaybOgModule
  ]
})
export class ComponentsModule { }
