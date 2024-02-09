import { Component } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.scss']
})
export class TemplatedrivenformComponent {

  pagename : string = "Template Driven Form";

  onSubmit(tdForm: NgForm) {
    console.log(tdForm.value);

  }
  getValue(tdForm:any) {
    console.log(tdForm);

  }
}
