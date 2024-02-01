import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { AdvisorsModule } from './advisors/advisors.module';
import { StudentsModule } from './students/students.module';
import { StIntNtModule } from './st-int-nt/st-int-nt.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdvisorsModule,
    StudentsModule,
    DashboardModule,
    StIntNtModule
  ]
})
export class ComponentsModule { }
