import { Injectable } from '@angular/core';
import { Router, CanActivate, CanActivateChild } from '@angular/router';
import { LoginService } from '../services/login.service';
@Injectable()
export class AuthAdmin implements CanActivateChild {
    constructor(private router: Router, private loginService: LoginService) { }

  public admin = false;
    public canActivateChild() {
        this.loginService.isAdmin().subscribe(
            res => {
                if (res.text() == 'true') { this.admin = true; }
            },
            err => {
                this.admin = false;
            }
        );
        return this.admin;
    }
}
@Injectable()
export class AuthManager implements CanActivateChild {
      public manager = false;
    constructor(private router: Router, private loginService: LoginService) { }
    public canActivateChild() {
        this.loginService.isManager().subscribe(
            res => {
                if (res.text() == 'true') { this.manager = true; }
            },
            err => {
                this.manager = false;
            }
        );
        return this.manager;
    }
}
@Injectable()
export class AuthEmployee implements CanActivateChild {
      public employee = false;
    constructor(private router: Router, private loginService: LoginService) { }
    public canActivateChild() {
        this.loginService.isEmployee().subscribe(
            res => {
                if (res.text() == 'true') { this.employee = true; ; }
            },
            err => {
                this.employee = false; 
            }
        );
        return this.employee;
    }
}
