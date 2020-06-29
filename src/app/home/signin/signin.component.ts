import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    templateUrl:'./signin.Component.html'
})
export class SigninComponent implements OnInit{

    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder){

    }

    ngOnInit(): void {

        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

}