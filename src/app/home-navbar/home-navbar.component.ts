import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-navbar',
  templateUrl: './home-navbar.component.html',
  styleUrls: ['./home-navbar.component.css']
})
export class HomeNavbarComponent implements OnInit {

  public isMenuCollapsed = true;
  faShoppingCart = faShoppingCart;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  LogoutHere() {
    sessionStorage.removeItem('sid');
    this.router.navigate([''])
  }

}
