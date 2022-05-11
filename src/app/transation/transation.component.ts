import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-transation',
  templateUrl: './transation.component.html',
  styleUrls: ['./transation.component.css']
})
export class TransationComponent implements OnInit {

 transation :any
  acno:any

  constructor(private ds:DataService) { 
    
  this.acno = JSON.parse(localStorage.getItem("currentAcno")|| '')
   this.ds.transation(this.acno)
  .subscribe((result:any)=>{
    if(result){
      this.transation = result.transation
    }
  },
  (result)=>{
    alert(result.error.message);
  }
  ) 
  console.log(this.transation);
  }
  ngOnInit(): void {
  }
}
