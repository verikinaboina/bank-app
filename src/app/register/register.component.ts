import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, MinLengthValidator } from '@angular/forms';
import { User } from '../constants/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  loading = false;
  firstName: any;
  pasword: string | any;
  lastName: string | any;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required, Validators.maxLength(5), Validators.pattern("^[a-zA-Z]$")],
      lastName: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  get getVal(): any { return this.form.controls; }

  RegUser() {
    this.submitted = true;
    if (this.form.invalid) { return }
    const response = confirm("Are you sure you want to do that?");
    if (response) {
      this.router.navigateByUrl('/login');
    } else {
      this.form.reset();
      this.router.navigateByUrl('/register');
    }
  }

  clear() {
    this.form.reset();
  }
}
