import { Injectable } from '@angular/core';
import { HttpClientService } from '../http-client.service';
import { Observable, firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClientService: HttpClientService) { }

  // async create(user: User): Promise<Create_User> {
  //   const observable: Observable<Create_User | User> = this.httpClientService.post<Create_User | User>({
  //     controller: "users"
  //   }, user);

  //     return await firstValueFrom(observable) as Create_User;
  // }

  async login(userName: string, password: string, callBackFunction: void): Promise<void> {
    const observable: Observable<any> = this.httpClientService.post({
      controller: "users",
      action: "login"
    }, {userName, password })

    await firstValueFrom(observable);
    callBackFunction;
  }



}
