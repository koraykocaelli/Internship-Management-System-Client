import { Component, Input } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry } from 'ngx-file-drop';
import { HttpClientService } from '../http-client.service';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../../ui/custom-toastr.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  spinner: any;
  toastrService: any;
  ToastrService: any;

  @Input()
  options!: Partial<FileUploadOptions>;

  public files!: NgxFileDropEntry[];

  constructor(
    private httpClientService: HttpClientService,
    private customToastrService: CustomToastrService,
    private dialog: MatDialog
  ) { }

  public selectedFiles(files: NgxFileDropEntry[]) {
    this.files = files;
    const fileData: FormData = new FormData();
    for (const file of files) {
      (file.fileEntry as FileSystemFileEntry).file((_file: File) => {
        fileData.append(_file.name, _file, file.relativePath);
      });
    }
    this.httpClientService.post({
      controller: this.options.controller,
      action: this.options.action,
      headers: new HttpHeaders({ "responseType": "blob" })
    }, fileData).subscribe(data => {
      const message: string = "Dosyalar başarıyla yüklenmiştir.";
      if (this.options.isAdminPage) {
        this.toastrService.message(message, {
          messageType: ToastrMessageType.Success,
          position: ToastrPosition.TopRight
        });
      } else {
        this.customToastrService.message(message, "Başarılı.", {
          messageType: ToastrMessageType.Success,
          position: ToastrPosition.TopRight
        });
      }
    }, (errorResponse: HttpErrorResponse) => {
      const message: string = "Dosyalar yüklenirken beklenmeyen bir hata ile karşılaşılmıştır.";
      if (this.options.isAdminPage) {
        this.ToastrService.message(message,
          {
            messageType: ToastrMessageType.Error,
            position: ToastrPosition.TopRight
          });
      } else {
        this.customToastrService.message(message, "Başarısız.", {
          messageType: ToastrMessageType.Error,
          position: ToastrPosition.TopRight
        });
      }
    });
  }

  public confirmDelete(internshipFileId: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: { message: 'Dosyayı silmek istediğinize emin misiniz?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deleteFile(internshipFileId);
      }
    });
  }

  public deleteFile(internshipFileId: string) {
    this.httpClientService.delete({
      controller: this.options.controller,
      action: this.options.action,
      headers: new HttpHeaders(),
      baseUrl: '', // Gerekirse temel URL belirleyin
    }, internshipFileId)
      .subscribe(
        (data: any) => {
          console.log('Dosya silme işlemi başarılı:', data);
          const message: string = "Dosya başarıyla silindi.";
          if (this.options.isAdminPage) {
            this.toastrService.message(message, {
              messageType: ToastrMessageType.Success,
              position: ToastrPosition.TopRight
            });
          } else {
            this.customToastrService.message(message, "Başarılı.", {
              messageType: ToastrMessageType.Success,
              position: ToastrPosition.TopRight
            });
          }
        },
        (errorResponse: HttpErrorResponse) => {
          console.error('Dosya silme işlemi hatası:', errorResponse);
          const message: string = "Dosya silinirken beklenmeyen bir hata ile karşılaşılmıştır.";
          if (this.options.isAdminPage) {
            this.ToastrService.message(message, {
              messageType: ToastrMessageType.Error,
              position: ToastrPosition.TopRight
            });
          } else {
            this.customToastrService.message(message, "Başarısız.", {
              messageType: ToastrMessageType.Error,
              position: ToastrPosition.TopRight
            });
          }
        }
      );
  }
}

export class FileUploadOptions {
  controller?: string;
  action?: string;
  explanation?: string;
  accept?: string;
  isAdminPage?: boolean = false;
}
