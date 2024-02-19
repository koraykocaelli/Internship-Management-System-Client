import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from '../../../base/base.component';
import { UserService } from '../../../services/common/models/user.service';
import { AuthService } from '../../../services/common/auth.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../../../services/ui/custom-toastr.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseComponent implements OnInit {

  constructor(private userService : UserService, private router: Router, spinner: NgxSpinnerService, private authService: AuthService, private activatedRoute: ActivatedRoute, private toastrService: CustomToastrService) {
    super(spinner);
  }
  
  ngOnInit(): void {
  }

  async loginAdvisor(userName: string, passwordAdvisor: string){
    this.showSpinner(SpinnerType.BallNewton);

    // Email doğrulaması 
    if (this.isValidEmail(userName)) {
      await this.userService.loginAdvisor(userName, passwordAdvisor, () => {
        this.authService.identityCheck();
         this.activatedRoute.queryParams.subscribe(params => {
           const returnUrl : string = params["returnUrl"];
           if (returnUrl)
            this.router.navigate([returnUrl]);
        });
        this.hideSpinner(SpinnerType.BallNewton)
       }).then(() => {
        // Başarılı giriş durumunda gerekli yönlendirmeyi yapıldı
        this.redirectToAdvisorPortal();
      }).catch(() => {
         // Hatalı giriş durumunda toastr kullanarak uyarı mesajı gösterildi
         this.toastrService.message("Kullanıcı Adı Veya Şifre Hatalı!","Hatalı Giriş!", {
           messageType: ToastrMessageType.Error,
           position: ToastrPosition.TopRight
         })
      });
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
    await this.userService.loginStudent(studentNo, passwordStudent, () => {
      this.authService.identityCheck();

      this.activatedRoute.queryParams.subscribe(params => {
        const returnUrl : string = params["returnUrl"];
        if (returnUrl)
         this.router.navigate([returnUrl]);
       });
      this.hideSpinner(SpinnerType.BallNewton)
    }).then(() => {
      // Başarılı giriş durumunda gerekli yönlendirmeyi yapıldı
      this.redirectToStudentPortal();
    }).catch(() => {
      // Hatalı giriş durumunda toastr kullanarak uyarı mesajı gösterildi
      this.toastrService.message("Öğrenci No Veya Şifre Hatalı!","Hatalı Giriş!", {
        messageType: ToastrMessageType.Error,
        position: ToastrPosition.TopRight
      })
    });
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
