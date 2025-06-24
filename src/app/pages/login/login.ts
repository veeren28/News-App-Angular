import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
// import { routes } from '../../app.routes';
import { RouterLink } from '@angular/router';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit {
  loginForm!: FormGroup;
  // @Input() LoggedIn!: boolean;
  @Output() loginsuccess = new EventEmitter<boolean>();
  @Output() registerClicked = new EventEmitter<boolean>();
  // Register!:boolean;

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  OnSubmit() {
    if (this.loginForm.valid) {
      this.loginsuccess.emit(true);
    } else {
      this.loginsuccess.emit(false);
    }
    // console.log(this.LoggedIn);
  }
  registerFunc() {
    this.registerClicked.emit(true);
  }
}
