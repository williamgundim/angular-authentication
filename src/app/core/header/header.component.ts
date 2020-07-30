import { Component, OnInit } from '@angular/core';
import { userService } from '../user/user.service';
import { Observable } from 'rxjs';
import { User } from '../user/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user$: Observable<User>;
  dadosUser: User;

  constructor(
    private userService: userService
  ) { 

    console.log('passou aqui')
    
    this.user$ = userService.getUser();
    
    this.user$.subscribe( dados =>{
      this.dadosUser = dados;

      console.log(this.dadosUser);

    })

  }

  ngOnInit() {


  }

}
