import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { CreateInternshipCommandRequest } from '../../../contracts/createInternshipCommandRequest';

@Injectable({
  providedIn: 'root'
})
export class InternshipFormService {

  constructor(private httpClientService: HttpClientService) { }

  create(internship: CreateInternshipCommandRequest, successCallBack?: any){

    this.httpClientService.post({
      controller: "Internship",
    }, internship)
      .subscribe(result => {
        successCallBack();
      });    


  }


}
