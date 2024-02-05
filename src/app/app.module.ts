import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { UiModule } from './ui/ui.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentPortalModule } from './student-portal/student-portal.module';
import { AdvisorPortalModule } from './advisor-portal/advisor-portal.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './services/admin/admin.component';
import { UiComponent } from './services/ui/ui.component';
import { AdvisorPortalComponent } from './services/advisor-portal/advisor-portal.component';
import { StudentPortalComponent } from './services/student-portal/student-portal.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminComponent,
    UiComponent,
    AdvisorPortalComponent,
    StudentPortalComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AdminModule, UiModule, 
    StudentPortalModule,
    AdvisorPortalModule,
    NgxSpinnerModule,
    HttpClientModule,    
  ],
  providers: [
    {provide: "baseUrl", useValue: "" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
