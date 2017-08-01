import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Router, Routes} from '@angular/router';
import * as _ from 'lodash';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginService {
  constructor(private http: Http, private _router:Router) { }


  sendCredential(username: string, password: string) {
    let url = "http://localhost:8095/auth";
    var formData = {
      username: username,
      password: password
    };
    let headers = new Headers(
      {
        'Content-Type': 'application/json; charset=utf-8'
        // 'Access-Control-Allow-Credentials' : true
      });
    return this.http.post(url, JSON.stringify(formData), { headers: headers });
  }

 public isAdmin() {
     let url = "http://localhost:8095/admin";
     let token = localStorage.getItem('jwtToken');
     let headers = new Headers({ 'Authorization':  token });
     return this.http.get(url, {headers: headers});
    }
 public isManager() {
     let url = "http://localhost:8095/manager";
     let token = localStorage.getItem('jwtToken');
     let headers = new Headers({ 'Authorization':  token });
     return this.http.get(url, {headers: headers});
    }

     public isEmployee() {
     let url = "http://localhost:8095/employee";
     let token = localStorage.getItem('jwtToken');
     let headers = new Headers({ 'Authorization':  token });
     return this.http.get(url, {headers: headers});
    }
}