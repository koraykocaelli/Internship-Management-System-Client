import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  toastrService: any;
  title = 'InternshipManagementSystem';

  constructor(private router: Router) {
   
  }

  refreshPage(): void {
    window.location.reload();
  }

  isLoggedIn(): boolean {
    return this.router.url !== '/login';
  }

  showNewNavbar(): boolean {
    return this.isLoggedIn() && (this.router.url.startsWith('/student-portal') || this.router.url.startsWith('/advisor-portal'));
  }

  logout(): void { 
    // Kullanıcı çıkış yaptığında anasayfaya yönlendirme yapılır
    this.router.navigateByUrl('');
  }

  redirectToPortal(): void {
    if (this.router.url === '/login') {
      const userRole = localStorage.getItem('userRole');
      if (userRole === 'student') {
        this.router.navigate(['/student-portal']);
      } else if (userRole === 'advisor') {
        this.router.navigate(['/advisor-portal']);
      }
    }
  }
}
