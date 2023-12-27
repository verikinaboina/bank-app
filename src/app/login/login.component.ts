import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  submitted = false;
  loading = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router) { }
  ngOnInit() {
    this.form = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get getVal():any { return this.form.controls; }

  submitUser() {
    this.submitted = true;


    // stops here if form is invalid
    if (this.form.invalid) { return; }

    this.loading = true;
    console.log("userName", this.form.controls['userName'].value);
    console.log("userName", this.form.controls['password'].value);
    this.router.navigateByUrl('/home');
  }

}
