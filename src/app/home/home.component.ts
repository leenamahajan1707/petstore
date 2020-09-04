
import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Router } from '@angular/router';
import { Pet } from "./../pet";
import { PETS } from "./../petlist";

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

  
  constructor(private router: Router) { }

  ngOnInit(): void {
    // if (!sessionStorage.getItem('sid')) {
    //   this.router.navigate(['sign-in']);
    // }
  }

  LogoutHere() {
    sessionStorage.removeItem('sid');
    this.router.navigate(['index'])
  }




  PetInfo: Pet;

  petname = '';

  toOrder1() {
    let name = document.querySelector("#one").innerHTML;
    this.petname = name.trim();
    this.router.navigate(['addItem'], { queryParams: { name: this.petname } });
  }
  toOrder2() {
    let name = document.querySelector("#two").innerHTML;
    this.petname = name.trim();
    this.router.navigate(['addItem'], { queryParams: { name: this.petname } });
  }
  toOrder3() {
    let name = document.querySelector("#three").innerHTML;
    this.petname = name.trim();
    this.router.navigate(['addItem'], { queryParams: { name: this.petname } });
  }
  toOrder4() {
    let name = document.querySelector("#four").innerHTML;
    this.petname = name.trim();
    this.router.navigate(['addItem'], { queryParams: { name: this.petname } });
  }
  toOrder5() {
    let name = document.querySelector("#five").innerHTML;
    this.petname = name.trim();
    this.router.navigate(['addItem'], { queryParams: { name: this.petname } });
  }
  toOrder6() {
    let name = document.querySelector("#six").innerHTML;
    this.petname = name.trim();
    this.router.navigate(['addItem'], { queryParams: { name: this.petname } });
  }



}





