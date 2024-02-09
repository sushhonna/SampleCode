import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor() { }

  // Email = new BehaviorSubject<any>("sush@gmail.com");
  // Pass = new BehaviorSubject<any>('sush');

  checkLoginCredentials(email:any,pass:any){
    if(email == 'sush@gmail.com' && pass == 'sush'){
      localStorage.setItem('email','sush@gmail.com');
      return true;
    }else{
      return false;
    }
  }
  
}
