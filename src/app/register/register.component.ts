import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  fname = new FormControl();
  lname = new FormControl();
  email = new FormControl();
  password = new FormControl();
  phno = new FormControl();

  constructor() { }

  ngOnInit(): void {
  }

}
