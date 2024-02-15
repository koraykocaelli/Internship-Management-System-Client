import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-file-upload-dialog',
  templateUrl: './file-upload-dialog.component.html',
  styleUrl: './file-upload-dialog.component.scss'
})
export class FileUploadDialogComponent {

  constructor(public dialogRef: MatDialogRef<FileUploadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  // Dosya yükleme formu gönderildiğinde çağrılır
  uploadFiles(files: FileList): void {
    // Seçilen dosyaları işlemek için burada yapılacak işlemler
    console.log('Seçilen dosyalar:', files);
    // Dosya yükleme pop-up'ını kapat
    this.dialogRef.close();
  }
}
