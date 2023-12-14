import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroupDirective, NgForm, Validators} from "@angular/forms";
import {AuthService} from "../../../core/services/auth.service";
import {ErrorStateMatcher} from "@angular/material/core";
import {timestamp} from "rxjs";

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  success:any;
  matcher = new MyErrorStateMatcher();

  @Input() error: string | null = null;

  @Output() submitEM = new EventEmitter();

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  registerForm = this.fb.group({
      name: this.fb.control('', Validators.compose([Validators.required, Validators.minLength(3)])),
      email: this.fb.control('', Validators.compose([Validators.required, Validators.email])),
      password: this.fb.control('', Validators.compose([Validators.required, Validators.minLength(8),Validators.pattern('^(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]+$')])),
      password_confirmation: this.fb.control('', Validators.compose([Validators.required, Validators.minLength(8),Validators.pattern('^(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]+$')]))
  });

  async onSubmit() {
    try {
      this.success =  await this.authService.register(this.registerForm);
    } catch (error) {
      console.log(error);
    }
  }
}
