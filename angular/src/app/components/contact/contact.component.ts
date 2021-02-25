import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})



export class ContactComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {

    
  }



  contactUsInfo={
    name:"",
    email:"",
    phoneNumber:"",
    message:""
  }

  contactUsInfoValidator={
    name:false,
    email:false,
    phoneNumber:false,
    message:false
  }



  sendMessage(){

    var validator =  new Boolean(false);
    this.contactUsInfoValidator.name = false;
    this.contactUsInfoValidator.email = false;
    this.contactUsInfoValidator.phoneNumber = false;
    this.contactUsInfoValidator.message = false;

    if(this.contactUsInfo.name === ""){
      this.contactUsInfoValidator.name = true;
      validator = true;
    }
    if(this.contactUsInfo.email === ""){
      this.contactUsInfoValidator.email = true;
      validator = true;
    }
    if(this.contactUsInfo.phoneNumber === ""){
      this.contactUsInfoValidator.phoneNumber = true;
      validator = true;
    }
    if(this.contactUsInfo.message === ""){
      this.contactUsInfoValidator.message = true;
      validator = true;
    }

    if(validator==false){
      localStorage.setItem('contactUsInfo',JSON.stringify(this.contactUsInfo));
      this.router.navigate(['/']);
    }
       

  }


}
