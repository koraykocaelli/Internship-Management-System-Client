import { Component, Output } from '@angular/core';

 @Component({
  selector: 'app-student-intership-approval',
  templateUrl: './student-intership-approval.component.html',
   styleUrl: './student-intership-approval.component.scss'
})
export class StudentIntershipApprovalComponent {

   @Output() fileUploadOptions: Partial<FileUploadOptions>={
      action: "upload",
      controller:"Advisor",
      explanation: "dosyaları sürükleyin veya seçin.",
      isAdminPage: true,
      accept:".pdf, .jpg, .rar, .zip"
   };

 }

 export class FileUploadOptions {
   controller?: string;
   action?: string;
   explanation?: string;
   accept?: string;
   isAdminPage?: boolean = false;
 }
 
