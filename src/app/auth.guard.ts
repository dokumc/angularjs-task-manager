import { Injectable } from '@angular/core';
import { Router, CanActivate} from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor( private router: Router) {}

    public canActivate() {
        if (localStorage.getItem('jwtToken')) {
            return true;
        } else {
            return false;
        }
    }
}
