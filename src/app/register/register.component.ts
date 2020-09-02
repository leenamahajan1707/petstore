import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public fbFormGroup = this.fb.group({
    fname: ['', Validators.required],
    lname: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
    phoneNo: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  async registerHere() {
    const data = this.fbFormGroup.value;
    const url = 'http://localhost:3001/addreguser';

    await this.http.post(url, data).toPromise();

    this.router.navigate(['sign-in']);

  }
}
