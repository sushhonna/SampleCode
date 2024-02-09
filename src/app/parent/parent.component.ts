import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import { DataTransferService } from '../service/data-transfer.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  constructor(private _service : DataTransferService){
    // data transfer using state management.
    sessionStorage.setItem("name","suviFoundation !")
  }
  titleName = "Parent Component";
  @ViewChild(ChildComponent) viewData !: ChildComponent
  parentName : any = "parent-child data transfer";
  parentdata : any ={
    "name" : "",
    "mark" : ""
  };
  response : any;

  transferData(name:any, mark:any){
    // this.parentdata.name = name;                                  // send data one by one
    // this.parentdata.mark = mark;                                  // send data one by one
    this.parentdata = {"name":name,"mark":mark};                     // send data by object
    // this.response = this.viewData.updateList(this.parentdata);    // using viewChild
    this._service.saveData(this.parentdata);                         // using service
  }

  updateTitle(title:any){
    this.titleName = title;
  }
}
