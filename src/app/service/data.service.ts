import { HttpClient, HttpHeaders } from '@angular/common/http';
import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';

const options ={
  headers:new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // transaction(acno: any): any {
  //   throw new Error('Method not implemented.');
  // }

  currentUser:any
  currentAcno:any

  database:any = {
    1000:{acno:1000,uname:"najmal",password:1000,balance:10000,transation:[]},
    1001:{acno:1001,uname:"nezrin",password:1001,balance:3000,transation:[]},
    1002:{acno:1002,uname:"najiya",password:1002,balance:13000,transation:[]}
  }

  constructor(private http:HttpClient) {
    this.getDetails()
   }

  // to save data in local storage

  saveDetails(){

    localStorage.setItem("database",JSON.stringify(this.database))

    if(this.currentAcno){
      localStorage.setItem("currentAcno",JSON.stringify(this.currentAcno))
      
    }
    if(this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    }
  }

  getDetails(){
  
    if(localStorage.getItem("database")){
      this.database=JSON.parse(localStorage.getItem("database")||'')
    }
    if(localStorage.getItem("currentAcno")){
      this.currentAcno=JSON.parse(localStorage.getItem("currentAcno")||'')
    }

    if(localStorage.getItem("currentUser")){
      this.currentUser=JSON.parse(localStorage.getItem("currentUser")||'')
    }

  }

  register(acno:any,uname:any,password:any){

    const data ={
      acno,
      uname,
      password
    }
    //API registraion
    return this.http.post('http://localhost:3000/register',data)

  }
  login(acno:any,pswd:any){
    //reg body
    const data ={
      acno,
      pswd
    }
    return this.http.post('http://localhost:3000/login',data)
   
    
      
  }
  //deposit

  deposit(acno:any,pswd:any,amt:any){

    const data ={
      acno,
      pswd,
      amt
    }
    
    //API registraion
    return this.http.post('http://localhost:3000/deposit',data,this.getOptions())
  }
  getOptions(){
        //to fetch token
        const token = JSON.parse(localStorage.getItem("token")||'')

        //create hhtp header
        let headers = new HttpHeaders()
        //add token to req header
        if(token){
          headers = headers.append('x-access-token',token)
          options.headers=headers
          // return headers
        }
   return options

  }

  whithdraw(acno:any,pswd:any,amt:any){

    const data ={
      acno,
      pswd,
      amt
    }
    
    //API registraion
    return this.http.post('http://localhost:3000/whithdraw',data,this.getOptions())

  }
  // deleteFromParent(){
  //   this.acno
  // }

  //TRANSATION
    transation(acno:any){
      const data ={
        acno
      }
      
      //API registraion
      return this.http.post('http://localhost:3000/transation',data,this.getOptions())
    }
    

    onDelete(acno:any){
      return this.http.delete('http://localhost:3000/onDelete/'+acno,this.getOptions())
    }
}


