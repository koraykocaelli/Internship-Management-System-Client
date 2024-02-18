import { Component, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileUploadDialogComponent } from '../file-upload-dialog/file-upload-dialog.component';
import { FileUploadOptions } from '../../../services/common/file-upload/file-upload.component';

 @Component({
  selector: 'app-student-intership-approval',
  templateUrl: './student-intership-approval.component.html',
   styleUrl: './student-intership-approval.component.scss'
})
export class StudentInternshipApprovalComponent {

   @Output() fileUploadOptions: Partial<FileUploadOptions>={
      action: "upload",
      controller:"advisor",
      explanation: "dosyaları sürükleyin veya seçin.",
      isAdminPage: true,
      accept:".pdf, .jpg, .rar, .zip"
   };

 }
