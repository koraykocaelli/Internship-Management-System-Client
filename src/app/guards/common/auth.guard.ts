import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../../services/ui/custom-toastr.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { SpinnerType } from '../../base/base.component';
import { AuthService, _isAuthenticated } from '../../services/common/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private jwtHelper: JwtHelperService,
    private router: Router,
    private toastrService: CustomToastrService,
    private spinner: NgxSpinnerService,
    private authService: AuthService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
      const token: string | null = localStorage.getItem("accessToken");
     //USER 
     //const user: string | null = localStorage.getItem("userRole");

     this.spinner.show(SpinnerType.BallNewton);

     let expired: boolean;
     try {
       expired = this.jwtHelper.isTokenExpired(token);


       //expired = this.jwtHelper.isTokenExpired(user);
     } catch {
       expired = true;
     }

      
     if (!expired && !token){
      this.router.navigate(["login"], { queryParams: { returnUrl: state.url } });
      this.toastrService.message("Oturum Açmanız Gerekiyor!", "Yetkisiz Erişim!", {
        messageType: ToastrMessageType.Warning,
        position: ToastrPosition.TopRight
      });
      this.spinner.hide(SpinnerType.BallNewton);
      return false;
    }

    this.spinner.hide(SpinnerType.BallNewton);
    return true;
  }
}
