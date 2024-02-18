import { Component, Input } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry } from 'ngx-file-drop'; // FileSystemFileEntry eklenmiştir
import { HttpClientService } from '../http-client.service';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../../ui/custom-toastr.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  spinner: any;
  toastrService: any;
  ToastrService: any;
  constructor(
    private httpClientService: HttpClientService,
    private customToastrService: CustomToastrService,
    private dialog: MatDialog
  ) { }

  public files!: NgxFileDropEntry[];

  @Input()
  options!: Partial<FileUploadOptions>;

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
        })
      } else {
        this.customToastrService.message(message, "Başarılı.", {
          messageType: ToastrMessageType.Success,
          position: ToastrPosition.TopRight
        })
      }


    }, (errorResponse: HttpErrorResponse) => {
      const message: string = "Dosyalar yüklenirken beklenmeyen bir hata ile karşılaşılmıştır.";

      if (this.options.isAdminPage) {
        this.ToastrService.message(message,
          {
            messageType: ToastrMessageType.Error,
            position: ToastrPosition.TopRight
          })
      } else {
        this.customToastrService.message(message, "Başarısız.", {
          messageType: ToastrMessageType.Error,
          position: ToastrPosition.TopRight
        })
      }

    });
  }
}

export class FileUploadOptions {
  controller?: string;
  action?: string;
  explanation?: string;
  accept?: string;
  isAdminPage?: boolean = false;
}
