import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router  ) { 

  }

  ngOnInit(): void {
  }

  loginInfo={
    email:"",
    password:"",
  }

  loginInfoValidator={
    email:false,
    password:false,
  }

  login(){

    var validator =  new Boolean(false);
    this.loginInfoValidator.email = false;
    this.loginInfoValidator.password = false;
    
    if(this.loginInfo.email === ""){
      this.loginInfoValidator.email = true;
      validator = true;
    }
    if(this.loginInfo.password === ""){
      this.loginInfoValidator.password = true;
      validator = true;
    }
    
    if(validator==false){
      localStorage.setItem('loginemail',this.loginInfo.email);
      this.router.navigate(['/dashboard']);
    }
   
   
  }



}
