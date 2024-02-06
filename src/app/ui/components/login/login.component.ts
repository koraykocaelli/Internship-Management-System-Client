import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { UserService } from '../../../services/common/models/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent extends BaseComponent implements OnInit {

  constructor(private userService : UserService, spinner: NgxSpinnerService) {
    super(spinner);

  }
  
  ngOnInit(): void {

    
  }

  async login(studentNo: string, userName: string, password: string){
    this.showSpinner(SpinnerType.BallNewton);
    await this.userService.login(studentNo,userName,password, () => this.hideSpinner(SpinnerType.BallNewton));

  }

  
  
  
  
  
  
  
  
  
  
  
  // async login(StudentNo: string, Password: string, UserName: string) {
  //   this.showSpinner(SpinnerType.BallNewton)

  //       // Kullanıcı adı ve şifre kontrolü
  //       if (this.userService.authenticate(this.username, this.password)) {
  //         this.loginSuccess.emit(true);
  //       } else {
  //         // Kullanıcı adı ve şifre hatalı
  //         this.loginSuccess.emit(false);
  //       }

  // }

  // @Output() loginSuccess = new EventEmitter<boolean>();
  // username: string = '';
  // password: string = '';





}
