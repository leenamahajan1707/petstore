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

  public uiInvalidCredential = false;

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) { }


  public fbFormGroup = this.fb.group({
    fname: ['', [Validators.required]],
    lname: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z0-9 ]*')]],
    email: ['', [Validators.required, Validators.email]],
    phoneNo: ['', [Validators.required, Validators.minLength(10)]],
    //Validators.pattern('/^([+]\d{2})?\d{10}$/')
  });


  ngOnInit(): void {
  }

  async registerHere() {
    const data = this.fbFormGroup.value;
    const url = 'http://localhost:3001/addreguser';

    const result: any = await this.http.post(url, data).toPromise();


    if (result.message) {
      this.router.navigate(['sign-in']);
    } else {
      this.uiInvalidCredential = true;
    }

  }
}
