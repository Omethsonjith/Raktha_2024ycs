import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SinginComponent } from './pages/singin/singin.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { DataComponent } from './pages/data/data.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';

import { securityInnerGuard } from './core/security-inner.guard';
import { AuthGuard } from './core/auth.guard';
const routes: Routes = [
  {path: '',component : HomeComponent},
  {path: 'login', component : LoginComponent,canActivate: [AuthGuard]},
  {path: 'dashboard', component : DashboardComponent},
  {path: 'register', component : SinginComponent,canActivate: [AuthGuard]},
  //{path: 'varify-email', component : VerifyEmailComponent},
 // {path: 'forgot-password', component : ForgotPasswordComponent},
  {path: 'data', component : DataComponent},
  {path: 'user', component : ProfileComponent,canActivate: [securityInnerGuard]}, ];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
