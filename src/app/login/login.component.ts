import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { faBaby } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
  }

  public uiInvalidCredential = false;

  constructor(private router: Router, private http: HttpClient, private fb: FormBuilder) { };

  gotohome(page) {
    // this.router.navigate(['4']);
    this.router.navigate([page]);
  }

  public fbFormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  async loginHere() {
    const data = this.fbFormGroup.value;
    const url = "http://localhost:3001/authuser";
    const result: any = await this.http.post(url, data).toPromise();

    if (result.message) {
      sessionStorage.setItem('sid', 'true');
      this.router.navigate(['home']);
    } else {
      this.uiInvalidCredential = true;
    }


  }


}
