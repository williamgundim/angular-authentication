import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/plataform/plataform-detector.service';

@Component({
    templateUrl:'./signin.Component.html'
})
export class SigninComponent implements OnInit{

    loginForm: FormGroup;
    @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private platformDetectorService: PlatformDetectorService
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
                    this.loginForm.reset();
                    
                    if (this.platformDetectorService.isPlatformBrowser){
                        this.userNameInput.nativeElement.focus();
                    }
                } 
            )
    }

}