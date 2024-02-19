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
import { Navbar2Component } from './navbar2/navbar2.component';
import { ToastrModule } from 'ngx-toastr';
import { JwtModule } from '@auth0/angular-jwt';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Navbar2Component,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AdminModule, UiModule, 
    StudentPortalModule,
    AdvisorPortalModule,
    NgxSpinnerModule,
    MatDialogModule,
    HttpClientModule,  
    ToastrModule.forRoot(),  
    MatDialogModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem("accessToken"),
        allowedDomains:["https://localhost:7165/api"]
      }
    }),
    
  ],
  providers: [
    {provide: "baseUrl", useValue: "https://localhost:7165/api",multi:true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
