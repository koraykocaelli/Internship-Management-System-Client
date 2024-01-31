import { Component, OnInit } from '@angular/core';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-staj-yon',
  templateUrl: './staj-yon.component.html',
  styleUrl: './staj-yon.component.scss'
})
export class StajYonComponent extends BaseComponent implements OnInit{

  constructor(spinner: NgxSpinnerService) {
    super(spinner);
  }

  ngOnInit(): void{
      this.showSpinner(SpinnerType.BallNewton);

  }


}
