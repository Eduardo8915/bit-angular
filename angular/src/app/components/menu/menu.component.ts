import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  iconDetails:object[];
  
  constructor() { }

  ngOnInit(): void {
    this.iconDetails = [
      
      {
        label:'Login',
        source:'assets/icons/user.png',
        link:'/login'
      },
      {
        label:'Logout',
        source:'assets/icons/salir.svg',
        link:'/'
      }
     
    ]

  }

}
