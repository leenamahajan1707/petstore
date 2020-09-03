import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient, private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  public fbFormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z0-9 ]*')]],
  });

  async resetHere() {
    const data = this.fbFormGroup.value;
    const url = "http://localhost:3001/userforgetpass";
    await this.http.post(url, data).toPromise();
    await alert("Password Successfully Reset!!");
    this.router.navigate(['sign-in']);

  }

}
