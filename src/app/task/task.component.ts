import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  // binding task
  title : any ;
  subTitle : any ;
  image : any ;
  url : any ;
  addBackground : any ;

  // directive task
  name : any;
  email : any;
  address : any;
  userArray : Array<any> = [];

  saveData(){
    this.userArray.push({
      "name":this.name,
      "email":this.email,
      "address":this.address
    })
  }
  onDelete(i:any){
    this.userArray.splice(i,1);
  }
}
