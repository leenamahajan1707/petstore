import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public isMenuCollapsed = true;
  faShoppingCart = faShoppingCart;

  images = ['dog4', 'dog2', 'dog3'].map((n) => `/assets/${n}.png`);
  nav = ['contact', 'sign-in', 'sign-up', 'addItem', 'home'];

  // public islogin = false;


  LogoutHere() {
    sessionStorage.removeItem('sid');
    this.router.navigate(['index'])
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    if (!sessionStorage.getItem('sid')) {
      this.router.navigate(['sign-in'])
    }
  }


  // collapsed = true;
  // toggleCollapsed(): void {
  //   this.collapsed = !this.collapsed;

  // }

}
