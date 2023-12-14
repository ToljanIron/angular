import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import {AuthService} from "../services/auth.service";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login-component',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  errors:any;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.compose([Validators.required, Validators.email])),
    password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(8)])),
  });

  matcher = new MyErrorStateMatcher();

  @Input() error: string | null = null;

  @Output() submitEM = new EventEmitter();

  constructor(private authService: AuthService) {
  }

  async onSubmit() {
    try {
      const result =  await this.authService.login(this.loginForm);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
}
