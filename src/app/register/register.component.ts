import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  protected url: string = environment.apiUrl;
  constructor(private fb: FormBuilder, private http: HttpClient) {}

  registerForm = this.fb.group({
      name: this.fb.control('', Validators.compose([Validators.required, Validators.minLength(3)])),
      email: this.fb.control('', Validators.compose([Validators.required, Validators.email])),
      password: this.fb.control('', Validators.compose([Validators.required, Validators.minLength(8),Validators.pattern('^(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]+$')])),
      password_confirmation: this.fb.control('', Validators.compose([Validators.required, Validators.minLength(8),Validators.pattern('^(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d]+$')]))
  });

  onSubmit() {
    try {
      const formData = this.registerForm.value;

      return new Promise((resolve, reject) => {
        this.http.post<any>(this.url + '/register', formData)
          .subscribe(
            (response) => {
              // Обработка успешного ответа
              console.log('Registration successful:', response);
              resolve(response);
            },
            (error) => {
              // Обработка ошибки
              console.error('Registration failed:', error);
              reject(error);
            }
          );
      });
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
