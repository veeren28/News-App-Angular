import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
export function MissingAt(control: AbstractControl): ValidationErrors | null {
  let value = control.value;
  if (value && !value.contains('@')) {
    return { MissingAt: true };
  }
  return null;
}
@Component({
  selector: 'app-registration-page',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registration-page.html',
  styleUrl: './registration-page.css',
})
export class RegistrationPage implements OnInit {
  registrationForm!: any;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      phno: ['', Validators.required, Validators.minLength(10)],
      email: ['', Validators.required, [MissingAt]],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
