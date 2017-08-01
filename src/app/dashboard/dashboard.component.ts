import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
})
export class Dashboard {
  private admin: any;
  private manager: any;
  private employee: any;
  constructor(private loginService: LoginService, private router: Router) {
    loginService.isAdmin().subscribe(
      res => {
        if (res.text() == 'true') { this.admin = true; } else { this.admin = false; }
      },
      err => {
        // console.log(err);

      }
    );
    loginService.isManager().subscribe(
      res => {
        if (res.text() == 'true') { this.manager = true; } else { this.manager = false; }
      },
      err => {
        // console.log(err);

      }
    );
    loginService.isEmployee().subscribe(
      res => {
        if (res.text() == 'true') { this.employee = true; } else { this.employee = false; }
      },
      err => {
        // console.log(err);

      }
    );
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
