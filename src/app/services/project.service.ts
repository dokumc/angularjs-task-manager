import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, Routes } from '@angular/router';


@Injectable()
export class ProjectsService {
    constructor(private http: Http, private _router: Router) { }


    getProjects() {
        let url = "http://localhost:8095/rest/employee/all";
        let token = localStorage.getItem('jwtToken');
        let headers = new Headers(
            {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': token
            });
        return this.http.get(url, { headers: headers });
    }

    getManager(id: number) {
        let url = "http://localhost:8095/rest/employee/get";
        let token = localStorage.getItem('jwtToken');
        let headers = new Headers(
            {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': token
            });
        return this.http.post(url, id, { headers: headers });
    }
    addProject(form: any) {
        let url = "http://localhost:8095/project/save";
        let token = localStorage.getItem('jwtToken');
        let headers = new Headers(
            {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': token
            });
        return this.http.put(url, JSON.stringify(form), { headers: headers });
    }

        getEmployeesByRole(label: any) {
        let url = "http://localhost:8095/rest/employee/byrole";
        let token = localStorage.getItem('jwtToken');
        let headers = new Headers(
            {
                'Content-Type': 'application/json; charset=utf-8',
                'Authorization': token
            });
              console.log(JSON.stringify(label));
        return this.http.post(url,label,  { headers: headers });
    }
}