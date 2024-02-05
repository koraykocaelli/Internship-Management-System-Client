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

<<<<<<< HEAD
  constructor(private userService : UserService, spinner: NgxSpinnerService) {
    super(spinner);

=======
  constructor(spinner: NgxSpinnerService) {
    super(spinner);
>>>>>>> 0ee2aed (update)
  }
  
  ngOnInit(): void {

    
  }

  async login(userName: string, password: string, callBackFunction: void){
    this.showSpinner(SpinnerType.BallNewton);
    await this.userService.login(userName,password, callBackFunction);

  }

  redirectToStudentPortal(){
    console.log('student portala gidildi')
  }
  redirectToAdvisorPortal(){
    console.log('advisor portala gidildi')
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
