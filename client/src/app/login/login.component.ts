import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'Login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logoBg : String;
  showSideMenu : boolean;
  constructor(private route : Router) { 
    this.logoBg = "assets/images/logo-trans.png";
    this.showSideMenu = false;
  }

  ngOnInit() {
  }
 
  takeMeDashboard(){
    this.route.navigate(['/', 'Dashboard']);
  }

}
