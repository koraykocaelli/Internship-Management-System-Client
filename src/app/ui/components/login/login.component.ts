import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from '../../../base/base.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent extends BaseComponent implements OnInit {
  userService: any;

  constructor(userService: UserService, spinner: NgxSpinnerService) {
    super(spinner)

  }
  ngOnInit(): void {

    this.showSpinner(SpinnerType.BallNewton);

  }

  async login(StudentNo: string, Password: string, UserName: string) {
    this.showSpinner(SpinnerType.BallNewton)

        // Kullanıcı adı ve şifre kontrolü
        if (this.userService.authenticate(this.username, this.password)) {
          this.loginSuccess.emit(true);
        } else {
          // Kullanıcı adı ve şifre hatalı
          this.loginSuccess.emit(false);
        }

  }

  @Output() loginSuccess = new EventEmitter<boolean>();
  username: string = '';
  password: string = '';





}
