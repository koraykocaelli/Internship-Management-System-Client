import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { FormlarModule } from './formlar/formlar.module';
import { IgBelgeModule } from './ig-belge/ig-belge.module';
import { StajDefModule } from './staj-def/staj-def.module';
import { StajYonModule } from './staj-yon/staj-yon.module';
import { LoginModule } from './login/login.module';




@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    HomeModule,
    FormlarModule,
    IgBelgeModule,
    StajDefModule,
    StajYonModule,
    LoginModule,
  
  ]
})
export class ComponentsModule { }
