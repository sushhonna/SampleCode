import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private fb: FormBuilder, private _demo: DemoService) { }
  msg: any;
  inRegister : boolean = false;
  // loginForm = new FormGroup ({
  //   email : new FormControl(''),
  //   pass : new FormControl('')
  // })

  loginForm = this.fb.group({
    email: ['', Validators.required],
    pass: ['']
  })

  ngOnInit() {
    this.loginForm.patchValue({
      email: 'sush@gmail.com',
      pass: 'sush'
    })
  }

  onSubmit() {
    console.warn(this.loginForm.value);
    let email = this.loginForm.controls.email.value;
    let pass = this.loginForm.controls.pass.value;
    var output = this._demo.checkLoginCredentials(email, pass);
    if (output == true && !this.inRegister) {
      this.router.navigate(['/dashboard']);
    } else {
      this.msg = "Invalid username and password";
    }
  }

  register() {
    this.inRegister = true;
    console.log("register");
    this.router.navigate(['/register']);
  }

  // reset() {
  //   console.log("reset");
  //   this.loginForm.reset();
  // }

}
