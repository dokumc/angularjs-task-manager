import { Component, OnInit } from '@angular/core';
import { IMyDrpOptions } from 'mydaterangepicker';
import { Router } from '@angular/router';
import { ProjectsService } from '../../services/project.service';
import { FormGroup, FormArray, AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomDateTime } from './custom-datetime.pipe';
@Component({
  // tslint:disable-next-line:component-selector
  selector: 'assistant',
  templateUrl: './assistent.component.html',
})
// tslint:disable-next-line:one-line
// tslint:disable-next-line:component-class-suffix
export class Assistent implements OnInit {
  private array: string[] = [];
  public manager = {};
  private myFilter;
  myForm: FormGroup;
  public mySource: any[] = [];
  constructor(private projectsService: ProjectsService, private fb: FormBuilder) {
    this.myForm = this.fb.group({
      title: new FormControl(),
      start_date: new FormControl(),
      end_date: new FormControl(),
      manager: new FormGroup({
        id: new FormControl(),
        firstname: new FormControl(),
        lastname: new FormControl(),
        email: new FormControl(),
        role: new FormGroup({
          id: new FormControl(),
          name: new FormControl()
        })
      })
    });
  }
  private myDateRangePickerOptions: IMyDrpOptions = {
    dateFormat: 'dd/mm/yyyy',
  };

  ngOnInit() {
    this.getProjects();
    this.myFilter = new CustomDateTime();
  }
  public getProjects() {
    this.projectsService.getEmployeesByRole("ROLE_MANAGER").subscribe(
      res => {
        JSON.parse(res.text()).forEach(item => {
          this.mySource.push({ id: item.id, value: item.firstname + " " + item.lastname });
        });
      },
      err => { }
    );
  }

  public mymanager(event: any) {
    this.projectsService.getManager(event.id).subscribe(
      res => { this.manager = res; },
      err => { }
    );
    this.getData().then((data) => {

      let res = JSON.parse(data.text());
      let obj = this.myForm.controls['manager'].value;
      obj.id = res.id;
      obj.firstname = res.firstname;
      obj.lastname = res.lastname;
      obj.email = res.email;
      obj.role.id = res.role.id;
      obj.role.name = res.role.name;
      console.log(res);
      this.myForm.controls['manager'].patchValue(obj);
    });
  }
  public onDateRangeChanged(event: any) {
    console.log(event);
    let fromD = this.myFilter.transform(event.beginJsDate, "YYYY-MM-DD");
    this.myForm.controls["start_date"].patchValue(fromD);
    let toD = this.myFilter.transform(event.endJsDate, "YYYY-MM-DD");
    this.myForm.controls["end_date"].patchValue(toD);
  }
  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.manager);
      }, 2000);
    });
  }
  submit() {
    this.projectsService.addProject(this.myForm.value).subscribe(
      res => { console.log(res); },
      err => { }
    );
  }
}

