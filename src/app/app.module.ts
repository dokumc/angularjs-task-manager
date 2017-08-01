import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LoginService } from './services/login.service';
import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import {DashboardModule} from './dashboard/dashboard.module';
import { AuthGuard } from './auth.guard';

import { Login } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    Login
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    FormsModule,
    DashboardModule,
    ReactiveFormsModule
  ],
  providers: [LoginService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
