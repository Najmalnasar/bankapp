import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { parse } from 'path';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // acno=""
  // pswd=""
  // amount=""

  // acno1=""
  // pswd1=""
  // amount1=""

  user:any
  acno:any

  //deposit

  depositForm = this.fb.group({

    acno:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd:['',[Validators.required,Validators.pattern('[A-Za-z0-9 ]*')]],
    amount:['',[Validators.required,Validators.pattern('[0-9]*')]]

  })

  whithdrawForm = this.fb.group({
     
    acno1:['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd1:['',[Validators.required,Validators.pattern('[A-Za-z0-9 ]*')]],
    amount1:['',[Validators.required,Validators.pattern('[0-9]*')]]

  })

  loginDate:any


  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { 
    this.user=JSON.parse(localStorage.getItem('currentUser') || '')
    this.loginDate= new Date()
  }

  ngOnInit(): void {

    // if(!localStorage.getItem("currentAcno")){
    //   alert("please login")
    //   this.router.navigateByUrl("")
    // }
  }

  deposit(){
    var acno = this.depositForm.value.acno
    var pswd = this.depositForm.value.pswd
    var amount = this.depositForm.value.amount

    if(this.depositForm.valid){

      const result = this.ds.deposit(acno,pswd,amount)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
        }
      },
      (result)=>{
        alert(result.error.message);
        }
        )
      }
      else{
        alert("invalid form")
      }
    
  }

  whithdraw(){
    var acno = this.whithdrawForm.value.acno1
    var pswd = this.whithdrawForm.value.pswd1
    var amount = this.whithdrawForm.value.amount1

    if(this.whithdrawForm.valid){
       this.ds.whithdraw(acno,pswd,amount)
      .subscribe((result:any)=>{
        if(result){
          alert(result.message)
        }
      },
      (result)=>{
        alert(result.error.message);
        }
        )
    }
    else{
      alert("invalid form")
    } 
  }

  deleteFromParent(){
    this.acno = JSON.parse(localStorage.getItem("currentAcno")||'')
  }

  logout(){
    localStorage.removeItem("currentUser")
    localStorage.removeItem("currentAcno")
    this.router.navigateByUrl("")
  }

  onCancel(){
    this.acno=""
  }

  onDelete(event:any){
    
  this.ds.onDelete(event)
  .subscribe((result:any)=>{
    if(result){
      alert(result.navigateByUrl(""))
    }
  },
  (result:any)=>{
    alert(result.error.message)
  }
  )
  }

}
