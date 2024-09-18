import { forwardRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SinginComponent } from './pages/singin/singin.component';
import { LoginComponent } from './pages/login/login.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from '../environments/environment';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';
import { FooterComponent } from './pages/component/footer/footer.component';
import { DataComponent } from './pages/data/data.component';
import { CarouselComponent } from './pages/component/carousel/carousel.component';
import { NavComponent } from './pages/component/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';


import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatSelectModule} from '@angular/material/select';
import { NumberComponent } from './pages/component/number/number.component';
import { MatIconModule } from '@angular/material/icon';
import { AsyncPipe, JsonPipe } from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { ProfileComponent } from './pages/profile/profile.component';
import { RouterModule } from '@angular/router';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AuthService } from './core/auth.service';
import { UserService } from './core/user.service';
import { UserResolver } from './pages/profile/user.resolver';
import { AuthGuard } from './core/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    SinginComponent,
    LoginComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    FooterComponent,
    DataComponent,
    NumberComponent,
    CarouselComponent,
    NavComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,

    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatIconModule,
    AsyncPipe,
    JsonPipe,
    MatFormFieldModule,
    MatInputModule, 
    MatDatepickerModule,
    MatCardModule,
    MatDividerModule,
    AngularFireModule.initializeApp(environment.firebase),
    
    
    
   
  ],
  providers: [AuthService, UserService, UserResolver, provideAnimationsAsync() ], //  AuthGuard,
  bootstrap: [AppComponent]
})
export class AppModule { }
