import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from '../../../base/base.component';

@Component({
  selector: 'app-staj-def',
  templateUrl: './staj-def.component.html',
  styleUrl: './staj-def.component.scss'
}) 
export class StajDefComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService) {
    super(spinner);
  }

  ngOnInit(): void{
      this.showSpinner(SpinnerType.BallNewton);

  }


}
