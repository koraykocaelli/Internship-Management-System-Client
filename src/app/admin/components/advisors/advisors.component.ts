import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService, Spinner } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from '../../../base/base.component';

@Component({
  selector: 'app-advisors',
  templateUrl: './advisors.component.html',
  styleUrl: './advisors.component.scss'
})
export class AdvisorsComponent extends BaseComponent implements OnInit {
   
  constructor(spinner: NgxSpinnerService) {
    super(spinner);
  }

  ngOnInit(): void{
      this.showSpinner(SpinnerType.BallNewton);

  }

}
