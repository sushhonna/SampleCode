import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataTransferService } from '../service/data-transfer.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  constructor(private _service : DataTransferService){
    this.listArray = this._service.getData();
  }
  titleName = "Child Component";
  @Input() parentData: any;
  @Output() dataUpdateEvent = new EventEmitter<string>();
  listArray = [
    {
      "name": "", "mark": ""
    }
  ]
  channelName : any;

  ngOnInit(){
    // sessionStorage name value are set from parent component
    this.channelName = sessionStorage.getItem("name") != null ? sessionStorage.getItem("name"):"";
  }

  updateList(obj:any){
    this.listArray.push(obj);
    return obj.name + " is added";
  }

}
