import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from '../../../base/base.component';

@Component({
  selector: 'app-ig-belge',
  templateUrl: './ig-belge.component.html',
  styleUrl: './ig-belge.component.scss'
})
export class IgBelgeComponent extends BaseComponent implements OnInit {

  constructor(spinner: NgxSpinnerService) {
    super(spinner);
  }

  ngOnInit(): void{
      this.showSpinner(SpinnerType.BallNewton);

  }

}
