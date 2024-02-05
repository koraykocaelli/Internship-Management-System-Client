// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable, firstValueFrom } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   isLoggedIn: any;


  // private apiUrl = 'http://your-csharp-backend/api';

  // constructor(private http: HttpClient) {}

  // login(username: string, password: string) {
  //   return this.http.post(`${this.apiUrl}/login`, { username, password });
  // }



  // private isLoggedIn: boolean = false;

  // constructor(private router: Router) {}

  // login() {
  //   // Kullanıcı girişi başarılı olduğunda çağrılır
  //   this.isLoggedIn = true;
  //   this.router.navigate(['/student-portal']); // Yönlendirilecek sayfanın rotasını belirtin
  // }

//   constructor(private httpClient: HttpClient) { }
//   async login(StudentNo: string, Password: string, UserName: string, callBackFunction?: () => void): Promise<any> {
//     const url = `/api/${"controller"}/${"action"}`; // Replace 'api' with your actual base URL
//     const observable: Observable<any> = this.httpClient.post(url, { UserName, Password });

//     await firstValueFrom(observable);

//     if (callBackFunction) {
//       callBackFunction();
//     }

//     authenticate(StudentNo, String, Password, String);  {
//       // Kullanıcı adı ve şifre kontrolü
//       // Eğer doğru ise true, aksi halde false dönebilirsiniz
//       return (UserName === 'dogruKullaniciAdi' && Password === 'dogruSifre');
//     }


// }
// }
// function authenticate(StudentNo: string, string: any, Password: string, string1: any) {
//   throw new Error('Function not implemented.');
// }

