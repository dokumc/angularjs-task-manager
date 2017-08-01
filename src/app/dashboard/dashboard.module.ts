import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NguiAutoCompleteModule } from '@ngui/auto-complete';
import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { routing } from './dashboard.routing';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { Dashboard } from './dashboard.component';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { Assistent } from './assistant/assistent.component';
import { Manager } from './manager/manager.component';
import { Employee } from './employee/employee.component';
import { DemoUtilsModule } from './employee/demo-utils/module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AuthAdmin, AuthManager, AuthEmployee } from './auth.guard';
import { ProjectsService} from '../services/project.service';
import { CustomDateTime } from './assistant/custom-datetime.pipe';
import { TaskService} from '../services/task.service';
@NgModule({
  declarations: [
    Dashboard,
    Assistent,
    Manager,
    Employee,
    CustomDateTime
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    MyDateRangePickerModule,
    NgbModalModule.forRoot(),
    CalendarModule.forRoot(),
    NguiAutoCompleteModule,
    DemoUtilsModule,
    BrowserAnimationsModule
  ],
  providers: [AuthAdmin, AuthManager, AuthEmployee, ProjectsService , TaskService],
  bootstrap: []
})
export class DashboardModule { }
