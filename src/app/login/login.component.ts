import { Component, OnInit, Input } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
})
export class Login {
    @Input() model: any;

    username: string;
    password: string;
    error = '';
    public form: FormGroup;

    constructor(fb: FormBuilder, private router: Router, private loginService: LoginService) {
        this.form = fb.group({
            'username': ['', Validators.compose([Validators.required, Validators.email])],
            'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
        });
    }



    submit() {
        //  let formm: any = JSON.stringify(this.form.value);

        this.username = this.form.value.username;
        this.password = this.form.value.password;


        this.loginService.sendCredential(this.username, this.password).subscribe(
            res => {
                if (res) {
                    localStorage.clear();
                    let data = JSON.parse(res.text());
                    localStorage.setItem('jwtToken', data.token);
                    this.router.navigate(['/dashboard']);
                }else {
                    this.error = 'Username or password is incorrect';
                }
            },
            err => {
                console.log(err);

            }
        );
    }


}
