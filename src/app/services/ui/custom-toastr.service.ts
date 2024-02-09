import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CustomToastrService {
  static message(arg0: string, arg1: string, arg2: {}) {
    throw new Error('Method not implemented.');
  }

  constructor(private toastr: ToastrService) { }
    message(message: string, title: string, toastrOptions: Partial<ToastrOptions>){
      if (toastrOptions.messageType) { // messageType özelliği tanımlı ise devam et
        this.toastr[toastrOptions.messageType](message, title,{
          positionClass: toastrOptions.position
        });
      } else {
        console.error('Toastr messageType is undefined.'); // messageType belirsizse hata göster
      }
    }

    showMessage(message: string, title: string, toastrOptions: Partial<ToastrOptions>): void {
      if (toastrOptions.messageType) {
        this.toastr[toastrOptions.messageType](message, title, {
          positionClass: toastrOptions.position
        });
      } else {
        console.error('Toastr messageType is undefined.');
      }
    }
  
    showSuccess(message: string, title: string, position: ToastrPosition = ToastrPosition.TopRight): void {
      this.showMessage(message, title, {
        messageType: ToastrMessageType.Success,
        position: position
      });
    }

}

export class ToastrOptions{
  messageType: ToastrMessageType = ToastrMessageType.Success; // Başlangıç değeri atandı
  position: ToastrPosition = ToastrPosition.TopRight; // Başlangıç değeri atandı
}

export enum ToastrMessageType{
  Success = "success",
  Info = "info",
  Warning = "warning",
  Error = "error"
}

export enum ToastrPosition{
  TopRight = "toast-top-right",
  BottomRight = "toast-bottom-right",
  BottomLeft = "toast-bottom-left",
  TopLeft = "toast-top-left",
  TopFullWidth = "toast-top-full-width",
  BottomFullWidth = "toast-bottom-full-width",
  TopCenter = "toast-top-center",
  BottomCenter = "toast-bottom-center",
}
