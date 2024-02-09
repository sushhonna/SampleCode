import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { noSpace } from '../validators/nospace.validators';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent {
  pagename: string = "Reactive Form";
  form: any;
  contactRegex: string = '[789][0-9]{9}';
  // emailRegex : string = '[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$';
  constructor(fb: FormBuilder) {

    // with form builder 

    this.form = fb.group({
      fname: ['', [Validators.required, Validators.minLength(5), noSpace.noSpaceValidations]], // noSpace.noSpaceValidations : is a custom validator
      email: ['', [Validators.required, Validators.email]],

      contactDetails: fb.group({
        address: ['', Validators.required],
        shippingAddress: ['', Validators.required],
        contactNumber: ['', [Validators.required, Validators.pattern(this.contactRegex)]]
      }),

      skills: fb.array([])
    })

    // without form builder 

    // this.form = new FormGroup({
    //   fname : new FormControl('',[Validators.required, Validators.minLength(5)]),
    //   email : new FormControl('', [Validators.required, Validators.email]),

    //   contactDetails : new FormGroup({
    //     address : new FormControl('', Validators.required),
    //     shippingAddress : new FormControl('', Validators.required),
    //     contactNumber : new FormControl('', [Validators.required, Validators.pattern(this.contactRegex)])
    //   }),

    //   skills:new FormArray([])
    // });

  }

  get fname() {
    return this.form.get('fname');
  }
  get email() {
    return this.form.get('email');
  }
  get address() {
    return this.form.get('contactDetails.address');
  }
  get shippingAddress() {
    return this.form.get('contactDetails.shippingAddress');
  }
  get contactNumber() {
    return this.form.get('contactDetails.contactNumber');
  }

  // add below fc get method insted of all above anf bind with html as fc.fname, fc.email etc for validation

  // get fc(){
  //   return this.form.controls;
  // }

  get skills() {
    return this.form.get('skills') as FormArray;
  }

  onSubmit() {
    console.log(this.form.value);
  }
  addSkills(skills: HTMLInputElement) {     // HTMLInputElement use this bcoz we need to access the skill of html input element
    this.skills.push(new FormControl(skills.value))
    skills.value = '';
    console.log(this.form.value);
  }

  remoreSkills(index: any) {
    this.skills.removeAt(index);
  }

}
