import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { UserService } from '../../../services/common/models/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {

  constructor(private userService : UserService, private router: Router, spinner: NgxSpinnerService) {
    super(spinner);
  }
  
  ngOnInit(): void {
  }

  async loginAdvisor(userName: string, passwordAdvisor: string){
    this.showSpinner(SpinnerType.BallNewton);



    //if statement ekledim numaricse istegi gonderiyor
    if (this.isValidEmail(userName)) {
    //istek burada |
    await this.userService.loginAdvisor(userName, passwordAdvisor, () => this.hideSpinner(SpinnerType.BallNewton));
    this.redirectToAdvisorPortal(); // Başarılı girişten sonra yönlendirme yapılıyor

    } else {
      alert("Email Adresi Doğru Değil!")
    }
    
  }

  async loginStudent(studentNo: string, passwordStudent: string){
    this.showSpinner(SpinnerType.BallNewton);
    var isNumeric = !isNaN(Number(studentNo));

    //if statement ekledim numaricse istegi gonderiyor
    if (isNumeric) {
    //istek burada |
    await this.userService.loginStudent(studentNo, passwordStudent, () => this.hideSpinner(SpinnerType.BallNewton));
    this.redirectToStudentPortal(); // Başarılı girişten sonra yönlendirme yapılıyor
    } else {
      alert("Öğrenci No Doğru Değil!")
    }
  
  }

  redirectToStudentPortal(){
    this.router.navigateByUrl('/student-portal');
  }

  redirectToAdvisorPortal(){
    this.router.navigateByUrl('/advisor-portal');
  }


   isValidEmail(email :string ) {
    // E-posta doğrulama için düzenleme (regular expression) kullanma
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Test fonksiyonu ile e-posta adresini kontrol et
    return emailPattern.test(email);
  }


}
