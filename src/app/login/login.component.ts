import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //database

  aim = "best banking partner"
  accno = "account number"
  acno=""
  pswd=""

  database = {
    1000:{acno:1000,uname:"najmal",password:1000,balance:10000},
    1001:{acno:1001,uname:"nezrin",password:1001,balance:3000},
    1002:{acno:1002,uname:"najiya",password:1002,balance:13000}
  }

  constructor() { }

  ngOnInit(): void {
  }

  acnoChange(event:any){
    this.acno = event.targer.value
    console.log(this.acno);
    
  }
  pswdChange(event:any){
    this.pswd = event.target.value
    console.log(this.pswd);
    
  }
   
   login(){
     alert("loging....")
   }

}