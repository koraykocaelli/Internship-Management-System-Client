 import { Injectable } from '@angular/core';
 import { JwtHelperService } from '@auth0/angular-jwt';

 @Injectable({
   providedIn: 'root'
 })
 export class AuthService {
  getUserRole(): string {
    const userRole = localStorage.getItem('userRole');
    return userRole ? userRole : 'guest';
  }
  
   constructor(private jwtHelper : JwtHelperService) { }

   identityCheck(){
    const token: string | null = localStorage.getItem("accessToken");
    console.log(token)
    console.log("asdasd")
    //USERa
    //const user: string | null = localStorage.getItem("userID");
    

      let expired: boolean;

      try {
       expired = this.jwtHelper.isTokenExpired(token);
      //USERTYPENAME  
      // expired = this.jwtHelper.isTokenExpired(user);
      } catch {
        expired = true;
      }



     
      //_isAuthenticated = user != null && !expired;

    
    
       _isAuthenticated = token != null && !expired;

      // _isAuthenticated = token != null && user != null && !expired;

      console.log()
    }
   

   get isAuthenticated(): boolean {
    this.identityCheck()
    return _isAuthenticated;
   }
   

 }

 export let _isAuthenticated: boolean;
