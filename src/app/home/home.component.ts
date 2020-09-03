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

  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  images = ['dog4', 'dog2', 'dog3'].map((n) => `/assets/${n}.png`);
  nav = ['contact', 'sign-in', 'sign-up', 'addItem', 'home'];

  LogoutHere() {
    sessionStorage.removeItem('sid');
    this.router.navigate(['home'])
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;

  }

}
