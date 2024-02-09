import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  constructor() { }

  listArray = [
    {
      "name": "Sushma", "mark": "100"
    }
  ]

  getData(){
    return this.listArray;
  }
  saveData(input:any){
    this.listArray.push(input);
  }
}
