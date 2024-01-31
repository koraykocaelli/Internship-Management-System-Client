import { Component, OnInit } from '@angular/core';
import { BaseComponent,SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService) {
    super(spinner);
  }

  ngOnInit(): void{
      this.showSpinner(SpinnerType.BallNewton);

  }

}
