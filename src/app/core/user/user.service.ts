import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as jwt_decode from 'jwt-decode'

import { tokenService } from '../token/token.service'
import { User } from './user'

@Injectable({
  providedIn: 'root'
})
export class userService {

  private userSubject = new Subject<User>();

  /**
   * 
   * @param tokenService 
   */
  constructor(private tokenService: tokenService ) {

    if (this.tokenService.hasToken){
      this.decodeAndNotify()
    }

   }
  
  /**
   * 
   * @param token 
   */
  setToken(token:string){
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  /**
   * getUser
   */
  getUser(){
    return this.userSubject.asObservable();
  }

  /**
   * 
   */
  private decodeAndNotify(){
    
    const token = this.tokenService.getToken();
    //const user = jwt_decode(token) as User;

    //console.log(user);

    //this.userSubject.next(user);

  }

}
