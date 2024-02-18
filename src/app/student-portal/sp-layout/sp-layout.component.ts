import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sp-layout',
  templateUrl: './sp-layout.component.html',
  styleUrl: './sp-layout.component.scss'
})
export class SpLayoutComponent {

  // @Output() loginSuccess = new EventEmitter<boolean>();

  // username: string = '';
  // password: string = '';
  // loginError: boolean = false;

  // login() {
  //   // Kullanıcı adı ve şifre kontrolü
  //   if (this.username === 'dogruKullaniciAdi' && this.password === 'dogruSifre') {
  //     this.loginError = false;
  //     // Başarılı giriş durumunu ana bileşene iletiyoruz
  //     this.loginSuccess.emit(true);
  //   } else {
  //     this.loginError = true;
  //   }
  // }

}
