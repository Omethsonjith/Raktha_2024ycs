import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-singin',
  templateUrl: './singin.component.html',
  styleUrl: './singin.component.css'
})
export class SinginComponent{
  registerForm!: FormGroup;
  errorMessage = '';
  successMessage = '';

  constructor(
    public authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  tryFacebookLogin() {
    this.authService.doFacebookLogin()
      .then(res => {
        this.router.navigate(['/data']);
      }, err => console.log(err)
      );
  }

  tryTwitterLogin() {
    this.authService.doTwitterLogin()
      .then(res => {
        // user
        this.router.navigate(['/data']);
      }, err => console.log(err)
      );
  }

  tryGoogleLogin() {
    this.authService.doGoogleLogin()
      .then(res => {
        this.router.navigate(['/data']);
      }, err => console.log(err)
      );
  }

  get f() { return this.registerForm.controls; }

  tryRegister() {
    
    this.authService.doRegister(this.f['email'].value, this.f['password'].value)
      .then(res => {
        this.errorMessage = '';
        this.successMessage = 'Your account has been created';
        this.authService.doLogout();
        this.router.navigate(['/data']);
      }, err => {
        this.errorMessage = err.message;
        this.successMessage = '';
      });
  }

}
