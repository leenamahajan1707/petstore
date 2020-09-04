import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Pet } from "./../pet";
import { PETS } from "./../petlist";
declare var $:JQueryStatic;

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  SelectedPet: Pet;
  msg = new FormControl();
  add = new FormControl();
  constructor(private route:ActivatedRoute,private router: Router) { }

  ngOnInit(): void {

    this.route.queryParams.subscribe(p  => {
      console.log('pet name: '+p.name)
      for (const Pet of PETS) 
      {
        if(Pet.name == p.name)
        {
          this.SelectedPet = Pet
          
        }
        
      }

    })
    
  }
  petname= '';
  buyNow()
  {
    let name = document.querySelector("#name").innerHTML;
    const petmsg = this.msg.value;
    const useradd = this.add.value;
    
    console.log(name);
    this.petname = name.trim();
    this.router.navigate(['addItem'],{queryParams:{name:this.petname,petmsg,useradd}});
  }

  shopeMore()
  {
    this.router.navigate(['home'])
  }


}
