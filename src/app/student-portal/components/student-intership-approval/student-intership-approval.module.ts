import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentInternshipApprovalComponent } from './student-intership-approval.component';
import { RouterModule } from '@angular/router';
import { FileUploadDialogModule } from '../file-upload-dialog/file-upload-dialog.module';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    StudentInternshipApprovalComponent
  ],
  imports: [
    CommonModule,
    FileUploadDialogModule,
    MatDialogModule,
    RouterModule.forChild([
      {path: "", component: StudentInternshipApprovalComponent}
    ])
    
  ]
})
export class StudentIntershipApprovalModule { }
