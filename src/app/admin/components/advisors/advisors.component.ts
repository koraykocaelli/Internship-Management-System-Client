import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService, Spinner } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { HttpClientService } from '../../../services/common/http-client.service';
import { Advisor } from '../../../contracts/advisor';



@Component({
  selector: 'app-advisors',
  templateUrl: './advisors.component.html',
  styleUrl: './advisors.component.scss'
})
export class AdvisorsComponent extends BaseComponent implements OnInit {
   
  constructor(spinner: NgxSpinnerService, private httpClientService: HttpClientService) {
    super(spinner);
  }

  ngOnInit(): void{
      this.showSpinner(SpinnerType.BallNewton);
      
      
      this.httpClientService.get<Advisor[]>({
        controller: "advisor"
      }).subscribe(data => {console.log(data)});

      //  this.httpClientService.post({
      //    controller: "advisor"
      //  }, {
      //    "advisorName": "d",
      //    "adviserSurname": "a",
      //    "tC_NO": "12345678922",
      //    "facultyName": "a",
      //    "departmentName": "a",
      //    "programName": "a",
      //    "address": "a",
      //    "email": "asdasdasddcccc@gmail.com"        
      //  }).subscribe();

      // this.httpClientService.put({
      //   controller: "advisor",
      // }, {
      //   "advisorID": "5f87d78b-1331-42c4-8fd7-82dc11c482dd",
      //   "advisorName": "XXXXXX",
      //   "adviserSurname": "stsadasdasdsaring",
      //   "tC_NO": "12345688940",
      //   "facultyName": "strinasdasdag",
      //   "departmentName": "string",
      //   "programName": "string",
      //   "address": "string",
      //   "email": "XXXXXag@gmail.com"
      // }).subscribe();

      // this.httpClientService.delete({
      //   controller: "advisor",
      // }, "5f87d78b-1331-42c4-8fd7-82dc11c482dd")
      //   .subscribe();


  }

}
