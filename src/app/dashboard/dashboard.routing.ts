import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Assistent } from './assistant/assistent.component';
import { Manager } from './manager/manager.component';
import { Employee } from './employee/employee.component';
import { Dashboard } from './dashboard.component';
import { AuthGuard } from '../auth.guard';
import { AuthAdmin, AuthEmployee, AuthManager } from './auth.guard';
export const routes: Routes = [
  {
    path: 'dashboard',
    component: Dashboard,
    canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: '**', redirectTo: 'dashboard', pathMatch: 'full'},
      {
        path: 'new-project',
        canActivateChild: [AuthAdmin],
        component: Assistent
      },
      {
        path: 'new-task',
        canActivateChild: [AuthManager],
        component: Manager
      },
      {
        path: 'new-timesheet',
        canActivateChild: [AuthEmployee],
        component: Employee
      }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
