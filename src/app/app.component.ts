import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/common/auth.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'InternshipManagementSystem';
  userRole: string | undefined;

  constructor(private router: Router, public authService: AuthService, private toastrService: CustomToastrService) {}

  ngOnInit(): void {
    this.userRole = this.authService.getUserRole() ?? 'guest';
    this.redirectToPortal();
  }

  //refreshPage(): void {
  //  window.location.reload();
  //}

  refreshSidebar(): void {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  signOut(): void {
    localStorage.removeItem("accessToken");
    this.authService.identityCheck();
    this.router.navigate([""]);
    this.toastrService.message("Oturum Kapatılmıştır!","Oturum Kapatıldı!",{
      messageType: ToastrMessageType.Warning,
      position: ToastrPosition.TopRight
    })
  }

  redirectToPortal(): void {
    if (this.router.url === '/login') {
      const userRole = this.authService.getUserRole();
      if (userRole === 'student') {
        this.router.navigate(['/student-portal']);
      } else if (userRole === 'advisor') {
        this.router.navigate(['/advisor-portal']);
      }
    }
  }
}
