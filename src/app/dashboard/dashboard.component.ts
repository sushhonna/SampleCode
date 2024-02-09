import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  pagename = "dashboard using reusable component";
  inputdata = [
    {
      gender: "Male",
      title: "Vivek",
      familyMember: "He is the husband of Sushma and father of Saanvi & Navya. He lived in Germany along with his family",
      borderClass: "border border-primary",
      color: "blue",
    },
    {
      gender: "Female",
      title: "Sushma",
      familyMember: "She is the wife of Vivek and mother of Saanvi & Navya. She lived in Germany along with her family",
      borderClass: "border border-success",
      color: "green",
    },
    {
      gender: "Female",
      title: "Saanvi",
      familyMember: "She is the elder daughter of Sushma & Vivek and elder sister of Navya. She lived with her parents",
      borderClass: "border border-secondary",
      color: "purple",
    },
    {
      gender: "Female",
      title: "Navya",
      familyMember: "She is the younger daughter of Sushma & Vivek and little sister of Saanvi. She lived with her parents",
      borderClass: "border border-warning",
      color: "orange",
    }
  ]

  constructor(private router: Router) { }
  sendMail() {
    this.router.navigate(['/email']);
  }
  parentData() {
    this.router.navigate(['/parent']);
  }
  taskPage(){
    this.router.navigate(['/task']);
  }
  tdfPage(){
    this.router.navigate(['/tdf']);
  }
  rfPage(){
    this.router.navigate(['/rf']);
  }
}
