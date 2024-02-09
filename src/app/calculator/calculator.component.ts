import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {

  num1: any;
  num2: any;
  result: any;
  action: any;
  pagename = "calculator";


  addition() {
    this.result = this.num1 + this.num2;
    this.action = `Addition of ${this.num1} & ${this.num2} is = `;
  }
  substraction() {
    this.result = this.num1 - this.num2;
    this.action = `Substraction of ${this.num1} & ${this.num2} is = `;
  }
  multiplication() {
    this.result = this.num1 * this.num2;
    this.action = `Multiplication of ${this.num1} & ${this.num2} is = `;
  }
  division() {
    this.result = (this.num1) / (this.num2);
    this.action = `Division of ${this.num1} & ${this.num2} is = `;
  }
  square() {    
    this.num2 = '';
    this.result = this.num1**2;
    this.action = `Square of ${this.num1} is = `;   
  }
  squareRoot() {    
    this.num2 = '';
    this.result = Math.sqrt(this.num1);
    this.action = `Square root of ${this.num1} is = `;   
  }
  clear() {
    this.num1 = '';
    this.num2 = '';
    this.result = '';
    this.action = '';
  }

  // ngOnInit() {

  // }
}
