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
    HttpClientModule,  
    ToastrModule.forRoot(),  
    JwtModule.forRoot({
      config: {
        tokenGetter: () => localStorage.getItem("accessToken"),
        allowedDomains:["https://imsprojectapi.azurewebsites.net/api"]
      }
    })
  ],
<<<<<<< HEAD
  providers: [
    {provide: "baseUrl", useValue: "https://imsprojectapi.azurewebsites.net/api", multi:true }
=======
  providers: [ 
>>>>>>> 0ee2aed (update)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
