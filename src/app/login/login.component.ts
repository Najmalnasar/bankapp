import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //database

  aim = "best banking partner"
  accnum = "account number"
  acno=""
  pswd=""

  //loginform

  loginForm =  this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[A-Za-z0-9 ]*')]]
  })
 

  database:any = {
    1000:{acno:1000,uname:"najmal",password:1000,balance:10000},
    1001:{acno:1001,uname:"nezrin",password:1001,balance:3000},
    1002:{acno:1002,uname:"najiya",password:1002,balance:13000}
  }

  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }


  // acnoChange(event:any){
  // this.acno = event.target.value
  // console.log(this.acno);
  
  
  // }

  // pswdChange(event:any){
  //   this.pswd = event.target.value
  //   console.log(this.pswd);
  // }

 login(){

   var acno = this.loginForm.value.acno
  //  console.log(acno);
   var pswd = this.loginForm.value.pswd
   if(this.loginForm.valid){
    
    this.ds.login(acno,pswd)
    .subscribe((result:any)=>{
      if (result){
        localStorage.setItem('currentAcno',JSON.stringify(result.currentAcno))
        localStorage.setItem('currentUser',JSON.stringify(result.currentUser))
        localStorage.setItem("token",JSON.stringify(result.token))

        alert(result.message)
        this.router.navigateByUrl("home")
      }
    },
    (result)=>{
      alert(result.error.message)
    }
    )}
   
    else{"invalid form"}

   }
  }

  
   // call login in dataservice
   
  //  let database = this.database

 

  //  if(acno in database){

  //   if(pswd == database[acno]["password"]){

     

  //   }

  //   else{
  //     alert("inncorrect password")
  //   }

  //  }
  //  else{
  //    alert("user doesnot exist!!!!")
  //  }
 
