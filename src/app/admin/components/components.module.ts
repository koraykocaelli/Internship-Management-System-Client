import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { AdvisorsModule } from './advisors/advisors.module';
import { StudentsModule } from './students/students.module';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdvisorsModule,
    StudentsModule,
    DashboardModule,
  ]
})
export class ComponentsModule { }
