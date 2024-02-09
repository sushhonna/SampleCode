import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(private fb: FormBuilder, private router:Router) { }
  msg: any;

  registrationForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', Validators.required],
    pass: ['', Validators.required],
    repass: ['', Validators.required],
  })

  ngOnInit() {
    
  }

  onSubmit() {
    console.log("inside submit");
    console.log(this.registrationForm.value);
    this.msg = "Successfully registered !!";
    // this.router.navigate(['/dashboard']);
  }

  login(){
    this.router.navigate(['/login']);
  }

}
