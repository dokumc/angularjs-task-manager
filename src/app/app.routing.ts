import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Login } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' },
  {
    path: 'login',
    component: Login
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
