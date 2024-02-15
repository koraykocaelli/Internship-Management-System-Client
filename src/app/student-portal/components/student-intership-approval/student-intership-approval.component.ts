import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FileUploadDialogComponent } from '../file-upload-dialog/file-upload-dialog.component';

@Component({
  selector: 'app-student-intership-approval',
  templateUrl: './student-intership-approval.component.html',
  styleUrl: './student-intership-approval.component.scss'
})
export class StudentInternshipApprovalComponent {
  
  constructor(public dialog: MatDialog) { }

  openFileUploadDialog(): void {
    const dialogRef = this.dialog.open(FileUploadDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Pop-up kapandıktan sonra yapılacak işlemler
    });
  }
}
