import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { EmailComponent } from './email/email.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalenderComponent } from './calender/calender.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { TaskComponent } from './task/task.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent },
  { path: 'register', loadChildren: () => import('./register/lazy-loading.module').then(m => m.LazyLoadingModule) },
  { path: 'email', component: EmailComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'calender', component: CalenderComponent },
  { path: 'child', component: ChildComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'task', component: TaskComponent },
  { path: 'tdf', component: TemplatedrivenformComponent },
  { path: 'rf', component: ReactiveformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
