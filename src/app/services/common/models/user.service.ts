import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Observable, firstValueFrom } from 'rxjs';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../../ui/custom-toastr.service';
import { TokenResponse } from '../../../contracts/token/tokenResponse';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClientService: HttpClientService, private toastrService: CustomToastrService) { }

  isLoggedIn(): boolean {
    // Kullanıcının giriş yapmış olup olmadığını kontrol etmek için gerekli mantığı burada uygulayın
    // Örneğin, localStorage'da kullanıcı oturum bilgisi tutuluyorsa ve geçerli ise true dönebilirsiniz
    return localStorage.getItem('userRole') !== null; // Örnek bir kontrol
  }

  async loginAdvisor(userName: string, password: string, callBackFunction?: () => void): Promise<any>{
    
     const observable: Observable<any | TokenResponse> = this.httpClientService.post<any | TokenResponse>({
       controller: "users",
       action: "login"
     }, {userName, password})


    //USER
     //const advisorObservable: Observable<any | UserResponse> = this.httpClientService.post<any | UserResponse>({
     //  controller: "users",
      // action: "login"
    // }, {userName, password})


     const tokenResponse: TokenResponse = await firstValueFrom(observable) as TokenResponse;
     if(tokenResponse)
     localStorage.setItem("accessToken", tokenResponse.token.accessToken);
    
     this.toastrService.message("Akademisyen Girişi Başarıyla Sağlanmıştır." , "Hoşgeldiniz!",{
         messageType : ToastrMessageType.Success,
         position:ToastrPosition.TopRight

     })

    //USER
    //  const userResponse: UserResponse = await firstValueFrom(advisorObservable) as UserResponse;
    //  if(userResponse)
    //  localStorage.setItem("userID", userResponse.user.userID);
    
    //  this.toastrService.message("Akademisyen Girişi Başarıyla Sağlanmıştır." , "Hoşgeldiniz!",{
    //      messageType : ToastrMessageType.Success,
    //      position:ToastrPosition.TopRight
    //  })



    callBackFunction && callBackFunction(); // Fonksiyon varsa çağrıyoruz
  }  

  async loginStudent(studentNo: string, passwordStudent: string, callBackFunction?: () => void): Promise<any> {
    const userName = studentNo;
    const password = passwordStudent;
     const observable: Observable<any | TokenResponse> = this.httpClientService.post<any | TokenResponse>({
       controller: "users",
       action: "login"
     }, {userName, password})


    //USER
    // const observable: Observable<any | UserResponse> = this.httpClientService.post<any | UserResponse>({
    //   controller: "users",
    //   action: "login"
    // }, {userName, password})

     const tokenResponse: TokenResponse = await firstValueFrom(observable) as TokenResponse;
     if(tokenResponse)
     localStorage.setItem("accessToken", tokenResponse.token.accessToken);

    
    //USER
    // const userResponse: UserResponse = await firstValueFrom(observable) as UserResponse;
    // if(userResponse)
    // localStorage.setItem("userId", userResponse.user.userRole);


    this.toastrService.message("Öğrenci Girişi Başarıyla Sağlanmıştır." , "Hoşgeldiniz!",{
        messageType : ToastrMessageType.Success,
        position:ToastrPosition.TopRight
    })
    callBackFunction && callBackFunction(); // Fonksiyon varsa çağrıyoruz
  }
}
