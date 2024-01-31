import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
// onLoginSuccess($event: Event) {
// throw new Error('Method not implemented.');
// }
  title = 'InternshipManagementSystem';

  constructor(private router: Router) {}

  showNavbarContent(): boolean {
    // Navbar içeriğini kontrol etmek için gereken koşulları burada belirleyin
    return this.router.url !== '/login';
  }

  showloginContent(): boolean {
    // Login sayfasının içeriğini kontrol etmek için gereken koşulları burada belirleyin
    return this.router.url === '/login';
  }
  
  showstudentportalContent(): boolean {
    // Student-portal sayfasının içeriğini kontrol etmek için gereken koşulları burada belirleyin
    return this.router.url === '/student-portal';
  }

  onLoginSuccess(isSuccessful: boolean) {
    if (isSuccessful) {
      // Başarılı giriş durumunda yönlendirme yapabilirsiniz
      this.router.navigate(['/student-portal']);
    }
  }


}
