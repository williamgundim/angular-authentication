import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const API_URL = 'http://localhost:3000'

@Injectable({
  providedIn: 'root' //unica instancia para a aplicacao inteira
})

export class AuthService {

  constructor(private http: HttpClient) {

  }


  authenticate(userName:string, password: string){

    //nome da propriedade tem o mesmo nome da variavel, pode passar de forma simplificada.
    //let oUser:object = {userName, password}
    let oUser: Object = {userName: userName, password: password}

    return this.http.post(API_URL + '/user/login', oUser)

  }

}
