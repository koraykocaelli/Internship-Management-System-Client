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
<<<<<<< HEAD
=======


>>>>>>> 0ee2aed (update)


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
<<<<<<< HEAD
=======
   
>>>>>>> 0ee2aed (update)

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
