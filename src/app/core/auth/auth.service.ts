import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const API_URL = 'http://localhost:3000'

@Injectable({
  providedIn: 'root' //unica instancia para a aplicacao inteira
})

export class AuthService {

  constructor(private http: HttpClient) {

  }

  /**authenticate
   * @description Método de autenticação dos usuários.
   * @param userName - user 
   * @param password - senha do usuário 
   */
  authenticate(userName:string, password: string){

    //nome da propriedade tem o mesmo nome da variavel, pode passar de forma simplificada.
    //let oUser:object = {userName, password}
    let oUser: Object = {userName: userName, password: password}

    return this.http
      .post(API_URL + '/user/login', oUser, {observe: 'response'} )
      .pipe(tap( res =>{
        //utiliza o tap para armanezar o token, ele é chamado entre a resposta e o subscribe.  
        const authToken = res.headers.get('x-access-token');
      }))
  }

}
