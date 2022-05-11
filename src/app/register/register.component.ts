import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  // acno=""
  // uname=""
  // pswd=""


  registerForm = this.fb.group({
    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    uname:['',[Validators.required,Validators.pattern('[A-Za-z ]*')]],
    pswd:['',[Validators.required,Validators.pattern('[A-Za-z0-9 ]*')]]
  })


  constructor(private ds:DataService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  }

  register(){
    
    var acno = this.registerForm.value.acno
    var pswd = this.registerForm.value.pswd
    var uname = this.registerForm.value.uname
    if(this.registerForm.valid){

      this.ds.register(acno,uname,pswd)
      .subscribe((result:any)=>{
        if(result){
            alert(result.message)
            this.router.navigateByUrl("")
        }
      },
      (result)=>{
        alert(result.error.message)
        })
      
    }
    else{
      alert("invalid form")
    }
  }
}
