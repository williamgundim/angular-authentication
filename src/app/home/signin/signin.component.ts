import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from 'src/app/core/auth.service';
import { Router } from '@angular/router';

@Component({
    templateUrl:'./signin.Component.html'
})
export class SigninComponent implements OnInit{

    loginForm: FormGroup;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router
        ){

    }

    ngOnInit(): void {

        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
 
    login(){
        let user = this.loginForm.get('userName').value;
        let password = this.loginForm.get('password').value;

        this.authService
            .authenticate(user, password)
            .subscribe(
                () => this.router.navigate(['user',user]),
                error => {
                    console.log('deu ruim'),
                    this.loginForm.reset
                } 
            )
    }

}