import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  faShoppingCart = faShoppingCart;


  constructor() { }

  ngOnInit(): void {
  }


  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;

  }

}
