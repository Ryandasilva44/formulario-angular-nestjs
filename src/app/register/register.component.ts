import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  user = { name: '', email: '' };
  // implementação para um alert

  message = '';
  isError = false;
  // fim da implementação

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http.post('http://localhost:3000/register', this.user).subscribe({
      next: (response: any) => {
        console.log('User registered', response);
        this.message = 'User registered successfully!';
        this.isError = false;
      },
      error: (error) => {
        console.error('Error registering user', error);
        this.message = 'Failed to register. Please try again.';
        this.isError = true;
      },
    });
  }
}
