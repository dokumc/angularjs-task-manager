import { Component, OnInit } from '@angular/core';
import { IMyDrpOptions } from 'mydaterangepicker';
import { Router } from '@angular/router';
import { TaskService } from '../../services/task.service';
import { FormGroup, FormArray, AbstractControl, FormBuilder, FormControl, Validators } from '@angular/forms';
import { CustomDateTime } from './custom-datetime.pipe';
@Component({
  selector: 'manager',
  templateUrl: './manager.component.html',
})
export class Manager implements OnInit {


  private aedit: boolean;
 private fedit: boolean;
  private array: string[] = [];
    private myFilter;
  myForm: FormGroup;
  public mySource: any[] = [];
  constructor(private taskService: TaskService, private fb: FormBuilder) {
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

this.aedit = false;
this.fedit;

  }
  private myDateRangePickerOptions: IMyDrpOptions = {
    dateFormat: 'dd/mm/yyyy',
  };

  ngOnInit() {
    this.getProjects();
    this.myFilter = new CustomDateTime();
  }
  public getProjects() {
    this.taskService.getEmployeesByRole("ROLE_USER").subscribe(
      res => {
        JSON.parse(res.text()).forEach(item => {
          this.mySource.push({ id: item.id, value: item.firstname + " " + item.lastname });
        });
      },
      err => { }
    );
  }
  public onDateRangeChanged(event: any) {
    console.log(event);
      let fromD = this.myFilter.transform(event.beginJsDate, "YYYY-MM-DD");
       this.myForm.controls["start_date"].patchValue(fromD);
        let toD = this.myFilter.transform(event.endJsDate, "YYYY-MM-DD");
       this.myForm.controls["end_date"].patchValue(toD);
  }
}
