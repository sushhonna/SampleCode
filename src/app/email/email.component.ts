import { Component } from '@angular/core';
import { EmailService } from '../service/email.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent {
  constructor(private email: EmailService, private snak: MatSnackBar, private router : Router) { }
  data = {
    to: "",
    cc: "",
    subject: "",
    message: ""
  }

  spinner: boolean = false;

  onSubmit() {
    console.log(this.data);
    if (this.data.to == '' || this.data.subject == '' || this.data.message == '') {
      this.snak.open("Fields can not be empty !!", "ok");
      return;
    }

    this.spinner = true;
    this.email.sendEmail(this.data).subscribe(
      res => {
        console.log(res);
        this.spinner = false;
        this.snak.open("Send email successfully !!", "ok");
      },
      err => {
        console.log(err);
        this.spinner = false;
        this.snak.open("Sorry, send email again !!", "ok");
      }
    )
    // this.snak.open("Send email successfully !!", "ok");
  }

  calender(){
    this.router.navigate(['/calender']);
  }
  calculator(){
    this.router.navigate(['/calculator']);
  }
}
