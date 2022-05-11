import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-delete-conform',
  templateUrl: './delete-conform.component.html',
  styleUrls: ['./delete-conform.component.css']
})
export class DeleteConformComponent implements OnInit {

  @Input() item:string | undefined

  @Output() onCancel = new EventEmitter()

  @Output() onDelete = new EventEmitter()
 
  constructor() { }

  ngOnInit(): void {
  }

  delete(){
   this.onDelete.emit(this.item)
  }

  cancel(){
    this.onCancel.emit()

  }

}
